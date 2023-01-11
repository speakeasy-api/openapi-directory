package openapisdk.models.operations;



public class RootV1ScoringsConsolidatedDailyResponse {
    public RootV1ScoringsConsolidatedDaily200ApplicationJson rootV1ScoringsConsolidatedDaily200ApplicationJSONObject;
    public RootV1ScoringsConsolidatedDailyResponse withRootV1ScoringsConsolidatedDaily200ApplicationJsonObject(RootV1ScoringsConsolidatedDaily200ApplicationJson rootV1ScoringsConsolidatedDaily200ApplicationJSONObject) {
        this.rootV1ScoringsConsolidatedDaily200ApplicationJSONObject = rootV1ScoringsConsolidatedDaily200ApplicationJSONObject;
        return this;
    }
    public String contentType;
    public RootV1ScoringsConsolidatedDailyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RootV1ScoringsConsolidatedDailyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RootV1ScoringsConsolidatedDailyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}