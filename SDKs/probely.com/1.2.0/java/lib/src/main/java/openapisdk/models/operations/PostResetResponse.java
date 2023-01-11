package openapisdk.models.operations;



public class PostResetResponse {
    public String contentType;
    public PostResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostReset200ApplicationJson postReset200ApplicationJSONObject;
    public PostResetResponse withPostReset200ApplicationJsonObject(PostReset200ApplicationJson postReset200ApplicationJSONObject) {
        this.postReset200ApplicationJSONObject = postReset200ApplicationJSONObject;
        return this;
    }
    public PostReset400ApplicationJson postReset400ApplicationJSONObject;
    public PostResetResponse withPostReset400ApplicationJsonObject(PostReset400ApplicationJson postReset400ApplicationJSONObject) {
        this.postReset400ApplicationJSONObject = postReset400ApplicationJSONObject;
        return this;
    }
}