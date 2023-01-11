package openapisdk.models.operations;



public class PostOauthLiveSessionTokenResponse {
    public String contentType;
    public PostOauthLiveSessionTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostOauthLiveSessionTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostOauthLiveSessionToken200ApplicationJson postOauthLiveSessionToken200ApplicationJSONObject;
    public PostOauthLiveSessionTokenResponse withPostOauthLiveSessionToken200ApplicationJsonObject(PostOauthLiveSessionToken200ApplicationJson postOauthLiveSessionToken200ApplicationJSONObject) {
        this.postOauthLiveSessionToken200ApplicationJSONObject = postOauthLiveSessionToken200ApplicationJSONObject;
        return this;
    }
}