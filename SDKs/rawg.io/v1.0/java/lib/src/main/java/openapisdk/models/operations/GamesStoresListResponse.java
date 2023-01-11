package openapisdk.models.operations;



public class GamesStoresListResponse {
    public String contentType;
    public GamesStoresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesStoresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GamesStoresList200ApplicationJson gamesStoresList200ApplicationJSONObject;
    public GamesStoresListResponse withGamesStoresList200ApplicationJsonObject(GamesStoresList200ApplicationJson gamesStoresList200ApplicationJSONObject) {
        this.gamesStoresList200ApplicationJSONObject = gamesStoresList200ApplicationJSONObject;
        return this;
    }
}