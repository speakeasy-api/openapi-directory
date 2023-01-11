package openapisdk.models.operations;



public class PlayerGameStatsByPlayerResponse {
    public String contentType;
    public PlayerGameStatsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object playerGame;
    public PlayerGameStatsByPlayerResponse withPlayerGame(Object playerGame) {
        this.playerGame = playerGame;
        return this;
    }
    public Long statusCode;
    public PlayerGameStatsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}