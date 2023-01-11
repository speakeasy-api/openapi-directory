package openapisdk.models.operations;



public class GamesAdditionsListResponse {
    public String contentType;
    public GamesAdditionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesAdditionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GamesAdditionsList200ApplicationJson gamesAdditionsList200ApplicationJSONObject;
    public GamesAdditionsListResponse withGamesAdditionsList200ApplicationJsonObject(GamesAdditionsList200ApplicationJson gamesAdditionsList200ApplicationJSONObject) {
        this.gamesAdditionsList200ApplicationJSONObject = gamesAdditionsList200ApplicationJSONObject;
        return this;
    }
}