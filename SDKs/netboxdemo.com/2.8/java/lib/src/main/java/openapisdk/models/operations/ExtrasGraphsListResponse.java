package openapisdk.models.operations;



public class ExtrasGraphsListResponse {
    public String contentType;
    public ExtrasGraphsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasGraphsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasGraphsList200ApplicationJson extrasGraphsList200ApplicationJSONObject;
    public ExtrasGraphsListResponse withExtrasGraphsList200ApplicationJsonObject(ExtrasGraphsList200ApplicationJson extrasGraphsList200ApplicationJSONObject) {
        this.extrasGraphsList200ApplicationJSONObject = extrasGraphsList200ApplicationJSONObject;
        return this;
    }
}