package openapisdk.models.operations;



public class PostAuthRevokeResponse {
    public String contentType;
    public PostAuthRevokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthRevokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAuthRevoke200ApplicationJson postAuthRevoke200ApplicationJSONObject;
    public PostAuthRevokeResponse withPostAuthRevoke200ApplicationJsonObject(PostAuthRevoke200ApplicationJson postAuthRevoke200ApplicationJSONObject) {
        this.postAuthRevoke200ApplicationJSONObject = postAuthRevoke200ApplicationJSONObject;
        return this;
    }
    public PostAuthRevoke400ApplicationJson postAuthRevoke400ApplicationJSONObject;
    public PostAuthRevokeResponse withPostAuthRevoke400ApplicationJsonObject(PostAuthRevoke400ApplicationJson postAuthRevoke400ApplicationJSONObject) {
        this.postAuthRevoke400ApplicationJSONObject = postAuthRevoke400ApplicationJSONObject;
        return this;
    }
    public PostAuthRevoke500ApplicationJson postAuthRevoke500ApplicationJSONObject;
    public PostAuthRevokeResponse withPostAuthRevoke500ApplicationJsonObject(PostAuthRevoke500ApplicationJson postAuthRevoke500ApplicationJSONObject) {
        this.postAuthRevoke500ApplicationJSONObject = postAuthRevoke500ApplicationJSONObject;
        return this;
    }
}