package openapisdk.models.operations;



public class PostAuthStartResponse {
    public String contentType;
    public PostAuthStartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthStartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAuthStart200ApplicationJson postAuthStart200ApplicationJSONObject;
    public PostAuthStartResponse withPostAuthStart200ApplicationJsonObject(PostAuthStart200ApplicationJson postAuthStart200ApplicationJSONObject) {
        this.postAuthStart200ApplicationJSONObject = postAuthStart200ApplicationJSONObject;
        return this;
    }
}