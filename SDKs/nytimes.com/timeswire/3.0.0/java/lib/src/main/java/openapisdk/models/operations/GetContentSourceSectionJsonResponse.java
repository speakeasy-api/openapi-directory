package openapisdk.models.operations;



public class GetContentSourceSectionJsonResponse {
    public String contentType;
    public GetContentSourceSectionJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContentSourceSectionJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetContentSourceSectionJson200ApplicationJson getContentSourceSectionJSON200ApplicationJSONObject;
    public GetContentSourceSectionJsonResponse withGetContentSourceSectionJson200ApplicationJsonObject(GetContentSourceSectionJson200ApplicationJson getContentSourceSectionJSON200ApplicationJSONObject) {
        this.getContentSourceSectionJSON200ApplicationJSONObject = getContentSourceSectionJSON200ApplicationJSONObject;
        return this;
    }
}