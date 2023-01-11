package openapisdk.models.operations;



public class GamesGameSeriesListResponse {
    public String contentType;
    public GamesGameSeriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesGameSeriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GamesGameSeriesList200ApplicationJson gamesGameSeriesList200ApplicationJSONObject;
    public GamesGameSeriesListResponse withGamesGameSeriesList200ApplicationJsonObject(GamesGameSeriesList200ApplicationJson gamesGameSeriesList200ApplicationJSONObject) {
        this.gamesGameSeriesList200ApplicationJSONObject = gamesGameSeriesList200ApplicationJSONObject;
        return this;
    }
}