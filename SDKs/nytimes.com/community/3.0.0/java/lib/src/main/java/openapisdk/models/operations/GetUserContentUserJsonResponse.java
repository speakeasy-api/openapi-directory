package openapisdk.models.operations;



public class GetUserContentUserJsonResponse {
    public String contentType;
    public GetUserContentUserJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetUserContentUserJson200ApplicationJson getUserContentUserJSON200ApplicationJSONObject;
    public GetUserContentUserJsonResponse withGetUserContentUserJson200ApplicationJsonObject(GetUserContentUserJson200ApplicationJson getUserContentUserJSON200ApplicationJSONObject) {
        this.getUserContentUserJSON200ApplicationJSONObject = getUserContentUserJSON200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetUserContentUserJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}