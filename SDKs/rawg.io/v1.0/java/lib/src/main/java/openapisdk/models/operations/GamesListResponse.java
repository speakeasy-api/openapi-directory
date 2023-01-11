package openapisdk.models.operations;



public class GamesListResponse {
    public String contentType;
    public GamesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GamesList200ApplicationJson gamesList200ApplicationJSONObject;
    public GamesListResponse withGamesList200ApplicationJsonObject(GamesList200ApplicationJson gamesList200ApplicationJSONObject) {
        this.gamesList200ApplicationJSONObject = gamesList200ApplicationJSONObject;
        return this;
    }
}