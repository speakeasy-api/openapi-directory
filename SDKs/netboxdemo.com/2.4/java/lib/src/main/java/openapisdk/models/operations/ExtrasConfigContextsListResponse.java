package openapisdk.models.operations;



public class ExtrasConfigContextsListResponse {
    public String contentType;
    public ExtrasConfigContextsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasConfigContextsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasConfigContextsList200ApplicationJson extrasConfigContextsList200ApplicationJSONObject;
    public ExtrasConfigContextsListResponse withExtrasConfigContextsList200ApplicationJsonObject(ExtrasConfigContextsList200ApplicationJson extrasConfigContextsList200ApplicationJSONObject) {
        this.extrasConfigContextsList200ApplicationJSONObject = extrasConfigContextsList200ApplicationJSONObject;
        return this;
    }
}