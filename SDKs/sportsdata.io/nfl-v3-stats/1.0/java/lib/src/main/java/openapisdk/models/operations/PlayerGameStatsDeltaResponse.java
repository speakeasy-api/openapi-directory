package openapisdk.models.operations;



public class PlayerGameStatsDeltaResponse {
    public String contentType;
    public PlayerGameStatsDeltaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGames;
    public PlayerGameStatsDeltaResponse withPlayerGames(Object[] playerGames) {
        this.playerGames = playerGames;
        return this;
    }
    public Long statusCode;
    public PlayerGameStatsDeltaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}