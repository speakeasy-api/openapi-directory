package openapisdk.models.operations;



public class PlayerGameStatsByWeekDeltaResponse {
    public String contentType;
    public PlayerGameStatsByWeekDeltaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGames;
    public PlayerGameStatsByWeekDeltaResponse withPlayerGames(Object[] playerGames) {
        this.playerGames = playerGames;
        return this;
    }
    public Long statusCode;
    public PlayerGameStatsByWeekDeltaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}