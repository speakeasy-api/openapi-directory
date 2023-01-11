package openapisdk.models.operations;



public class AnalyticsResponse {
    public Analytics200ApplicationJson analytics200ApplicationJSONObject;
    public AnalyticsResponse withAnalytics200ApplicationJsonObject(Analytics200ApplicationJson analytics200ApplicationJSONObject) {
        this.analytics200ApplicationJSONObject = analytics200ApplicationJSONObject;
        return this;
    }
    public String contentType;
    public AnalyticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}