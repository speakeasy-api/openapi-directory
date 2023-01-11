package openapisdk.models.operations;



public class GetUserContentUrlJsonResponse {
    public String contentType;
    public GetUserContentUrlJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetUserContentUrlJson200ApplicationJson getUserContentUrlJSON200ApplicationJSONObject;
    public GetUserContentUrlJsonResponse withGetUserContentUrlJson200ApplicationJsonObject(GetUserContentUrlJson200ApplicationJson getUserContentUrlJSON200ApplicationJSONObject) {
        this.getUserContentUrlJSON200ApplicationJSONObject = getUserContentUrlJSON200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetUserContentUrlJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}