package openapisdk.models.operations;



public class PlayerTournamentStatsByPlayerResponse {
    public String contentType;
    public PlayerTournamentStatsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object playerTournament;
    public PlayerTournamentStatsByPlayerResponse withPlayerTournament(Object playerTournament) {
        this.playerTournament = playerTournament;
        return this;
    }
    public Long statusCode;
    public PlayerTournamentStatsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}