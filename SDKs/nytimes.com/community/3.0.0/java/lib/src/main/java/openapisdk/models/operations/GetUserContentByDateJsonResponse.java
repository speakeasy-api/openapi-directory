package openapisdk.models.operations;



public class GetUserContentByDateJsonResponse {
    public String contentType;
    public GetUserContentByDateJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetUserContentByDateJson200ApplicationJson getUserContentByDateJSON200ApplicationJSONObject;
    public GetUserContentByDateJsonResponse withGetUserContentByDateJson200ApplicationJsonObject(GetUserContentByDateJson200ApplicationJson getUserContentByDateJSON200ApplicationJSONObject) {
        this.getUserContentByDateJSON200ApplicationJSONObject = getUserContentByDateJSON200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetUserContentByDateJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}