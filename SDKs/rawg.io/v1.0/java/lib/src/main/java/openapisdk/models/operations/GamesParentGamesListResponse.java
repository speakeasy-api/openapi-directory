package openapisdk.models.operations;



public class GamesParentGamesListResponse {
    public String contentType;
    public GamesParentGamesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesParentGamesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GamesParentGamesList200ApplicationJson gamesParentGamesList200ApplicationJSONObject;
    public GamesParentGamesListResponse withGamesParentGamesList200ApplicationJsonObject(GamesParentGamesList200ApplicationJson gamesParentGamesList200ApplicationJSONObject) {
        this.gamesParentGamesList200ApplicationJSONObject = gamesParentGamesList200ApplicationJSONObject;
        return this;
    }
}