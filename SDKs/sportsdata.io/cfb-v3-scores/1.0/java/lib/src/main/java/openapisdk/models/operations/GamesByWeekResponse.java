package openapisdk.models.operations;



public class GamesByWeekResponse {
    public String contentType;
    public GamesByWeekResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] games;
    public GamesByWeekResponse withGames(Object[] games) {
        this.games = games;
        return this;
    }
    public Long statusCode;
    public GamesByWeekResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}