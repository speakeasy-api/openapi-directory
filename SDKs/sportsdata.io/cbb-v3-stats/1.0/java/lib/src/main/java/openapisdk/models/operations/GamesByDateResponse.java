package openapisdk.models.operations;



public class GamesByDateResponse {
    public String contentType;
    public GamesByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] games;
    public GamesByDateResponse withGames(Object[] games) {
        this.games = games;
        return this;
    }
    public Long statusCode;
    public GamesByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}