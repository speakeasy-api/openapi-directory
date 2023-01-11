package openapisdk.models.operations;



public class PlayerGameStatsByTeamResponse {
    public String contentType;
    public PlayerGameStatsByTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGames;
    public PlayerGameStatsByTeamResponse withPlayerGames(Object[] playerGames) {
        this.playerGames = playerGames;
        return this;
    }
    public Long statusCode;
    public PlayerGameStatsByTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}