package openapisdk.models.operations;



public class PostAuthRefreshResponse {
    public String contentType;
    public PostAuthRefreshResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthRefreshResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAuthRefresh200ApplicationJson postAuthRefresh200ApplicationJSONObject;
    public PostAuthRefreshResponse withPostAuthRefresh200ApplicationJsonObject(PostAuthRefresh200ApplicationJson postAuthRefresh200ApplicationJSONObject) {
        this.postAuthRefresh200ApplicationJSONObject = postAuthRefresh200ApplicationJSONObject;
        return this;
    }
    public PostAuthRefresh400ApplicationJson postAuthRefresh400ApplicationJSONObject;
    public PostAuthRefreshResponse withPostAuthRefresh400ApplicationJsonObject(PostAuthRefresh400ApplicationJson postAuthRefresh400ApplicationJSONObject) {
        this.postAuthRefresh400ApplicationJSONObject = postAuthRefresh400ApplicationJSONObject;
        return this;
    }
    public PostAuthRefresh500ApplicationJson postAuthRefresh500ApplicationJSONObject;
    public PostAuthRefreshResponse withPostAuthRefresh500ApplicationJsonObject(PostAuthRefresh500ApplicationJson postAuthRefresh500ApplicationJSONObject) {
        this.postAuthRefresh500ApplicationJSONObject = postAuthRefresh500ApplicationJSONObject;
        return this;
    }
}