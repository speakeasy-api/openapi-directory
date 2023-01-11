package openapisdk.models.operations;



public class GamesScreenshotsListResponse {
    public String contentType;
    public GamesScreenshotsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesScreenshotsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GamesScreenshotsList200ApplicationJson gamesScreenshotsList200ApplicationJSONObject;
    public GamesScreenshotsListResponse withGamesScreenshotsList200ApplicationJsonObject(GamesScreenshotsList200ApplicationJson gamesScreenshotsList200ApplicationJSONObject) {
        this.gamesScreenshotsList200ApplicationJSONObject = gamesScreenshotsList200ApplicationJSONObject;
        return this;
    }
}