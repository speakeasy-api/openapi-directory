package openapisdk.models.operations;



public class PlayerGameStatsByWeekResponse {
    public String contentType;
    public PlayerGameStatsByWeekResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGames;
    public PlayerGameStatsByWeekResponse withPlayerGames(Object[] playerGames) {
        this.playerGames = playerGames;
        return this;
    }
    public Long statusCode;
    public PlayerGameStatsByWeekResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}