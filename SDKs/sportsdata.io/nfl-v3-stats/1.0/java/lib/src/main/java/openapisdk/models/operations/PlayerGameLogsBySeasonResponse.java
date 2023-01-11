package openapisdk.models.operations;



public class PlayerGameLogsBySeasonResponse {
    public String contentType;
    public PlayerGameLogsBySeasonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGames;
    public PlayerGameLogsBySeasonResponse withPlayerGames(Object[] playerGames) {
        this.playerGames = playerGames;
        return this;
    }
    public Long statusCode;
    public PlayerGameLogsBySeasonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}