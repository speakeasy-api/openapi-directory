package openapisdk.models.operations;



public class ExtrasObjectChangesListResponse {
    public String contentType;
    public ExtrasObjectChangesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasObjectChangesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasObjectChangesList200ApplicationJson extrasObjectChangesList200ApplicationJSONObject;
    public ExtrasObjectChangesListResponse withExtrasObjectChangesList200ApplicationJsonObject(ExtrasObjectChangesList200ApplicationJson extrasObjectChangesList200ApplicationJSONObject) {
        this.extrasObjectChangesList200ApplicationJSONObject = extrasObjectChangesList200ApplicationJSONObject;
        return this;
    }
}