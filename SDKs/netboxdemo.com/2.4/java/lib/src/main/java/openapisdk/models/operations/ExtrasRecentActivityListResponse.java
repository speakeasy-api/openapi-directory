package openapisdk.models.operations;



public class ExtrasRecentActivityListResponse {
    public String contentType;
    public ExtrasRecentActivityListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasRecentActivityListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasRecentActivityList200ApplicationJson extrasRecentActivityList200ApplicationJSONObject;
    public ExtrasRecentActivityListResponse withExtrasRecentActivityList200ApplicationJsonObject(ExtrasRecentActivityList200ApplicationJson extrasRecentActivityList200ApplicationJSONObject) {
        this.extrasRecentActivityList200ApplicationJSONObject = extrasRecentActivityList200ApplicationJSONObject;
        return this;
    }
}