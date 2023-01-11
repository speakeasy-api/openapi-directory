package openapisdk.models.operations;



public class GetUserContentRecentJsonResponse {
    public String contentType;
    public GetUserContentRecentJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetUserContentRecentJson200ApplicationJson getUserContentRecentJSON200ApplicationJSONObject;
    public GetUserContentRecentJsonResponse withGetUserContentRecentJson200ApplicationJsonObject(GetUserContentRecentJson200ApplicationJson getUserContentRecentJSON200ApplicationJSONObject) {
        this.getUserContentRecentJSON200ApplicationJSONObject = getUserContentRecentJSON200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetUserContentRecentJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}