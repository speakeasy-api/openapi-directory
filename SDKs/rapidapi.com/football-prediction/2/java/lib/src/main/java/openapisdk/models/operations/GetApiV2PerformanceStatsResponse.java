package openapisdk.models.operations;



public class GetApiV2PerformanceStatsResponse {
    public String contentType;
    public GetApiV2PerformanceStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV2PerformanceStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetApiV2PerformanceStats200ApplicationJson getApiV2PerformanceStats200ApplicationJSONObject;
    public GetApiV2PerformanceStatsResponse withGetApiV2PerformanceStats200ApplicationJsonObject(GetApiV2PerformanceStats200ApplicationJson getApiV2PerformanceStats200ApplicationJSONObject) {
        this.getApiV2PerformanceStats200ApplicationJSONObject = getApiV2PerformanceStats200ApplicationJSONObject;
        return this;
    }
    public GetApiV2PerformanceStats404ApplicationJson getApiV2PerformanceStats404ApplicationJSONObject;
    public GetApiV2PerformanceStatsResponse withGetApiV2PerformanceStats404ApplicationJsonObject(GetApiV2PerformanceStats404ApplicationJson getApiV2PerformanceStats404ApplicationJSONObject) {
        this.getApiV2PerformanceStats404ApplicationJSONObject = getApiV2PerformanceStats404ApplicationJSONObject;
        return this;
    }
}