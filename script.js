// Dados dos times
const times = [
    "Time A",
    "Time B",
    "Time C",
    "Time D",
    "Time E",
    "Time F",
    "Time G",
    "Time H"
];

// Função para criar a tabela do campeonato
function criarTabela() {
    const tabela = document.getElementById("tabela");
    const cabecalho = document.createElement("tr");

    // Cabeçalho da tabela
    cabecalho.innerHTML = "<th>Times</th>";
    for (let i = 0; i < times.length; i++) {
        cabecalho.innerHTML += "<th>" + times[i] + "</th>";
    }
    tabela.appendChild(cabecalho);

    // Corpo da tabela
    for (let i = 0; i < times.length; i++) {
        const linha = document.createElement("tr");
        linha.innerHTML = "<td>" + times[i] + "</td>";

        for (let j = 0; j < times.length; j++) {
            if (i === j) {
                linha.innerHTML += "<td>-</td>";
            } else {
                // Aqui você pode adicionar lógica para preencher os resultados dos jogos
                linha.innerHTML += "<td>vs</td>";
            }
        }
        tabela.appendChild(linha);
    }
}

// Chamada para criar a tabela quando a página carrega
window.onload = function () {
    criarTabela();
};
