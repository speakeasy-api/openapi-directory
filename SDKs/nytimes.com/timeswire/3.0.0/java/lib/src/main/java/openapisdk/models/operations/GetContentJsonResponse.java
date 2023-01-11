package openapisdk.models.operations;



public class GetContentJsonResponse {
    public String contentType;
    public GetContentJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContentJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetContentJson200ApplicationJson getContentJSON200ApplicationJSONObject;
    public GetContentJsonResponse withGetContentJson200ApplicationJsonObject(GetContentJson200ApplicationJson getContentJSON200ApplicationJSONObject) {
        this.getContentJSON200ApplicationJSONObject = getContentJSON200ApplicationJSONObject;
        return this;
    }
}