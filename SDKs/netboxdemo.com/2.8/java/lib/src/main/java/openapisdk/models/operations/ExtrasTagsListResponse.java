package openapisdk.models.operations;



public class ExtrasTagsListResponse {
    public String contentType;
    public ExtrasTagsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTagsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasTagsList200ApplicationJson extrasTagsList200ApplicationJSONObject;
    public ExtrasTagsListResponse withExtrasTagsList200ApplicationJsonObject(ExtrasTagsList200ApplicationJson extrasTagsList200ApplicationJSONObject) {
        this.extrasTagsList200ApplicationJSONObject = extrasTagsList200ApplicationJSONObject;
        return this;
    }
}