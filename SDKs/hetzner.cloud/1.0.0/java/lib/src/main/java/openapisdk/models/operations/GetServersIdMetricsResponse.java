package openapisdk.models.operations;



public class GetServersIdMetricsResponse {
    public String contentType;
    public GetServersIdMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServersIdMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetServersIdMetrics200ApplicationJson getServersIdMetrics200ApplicationJSONObject;
    public GetServersIdMetricsResponse withGetServersIdMetrics200ApplicationJsonObject(GetServersIdMetrics200ApplicationJson getServersIdMetrics200ApplicationJSONObject) {
        this.getServersIdMetrics200ApplicationJSONObject = getServersIdMetrics200ApplicationJSONObject;
        return this;
    }
}