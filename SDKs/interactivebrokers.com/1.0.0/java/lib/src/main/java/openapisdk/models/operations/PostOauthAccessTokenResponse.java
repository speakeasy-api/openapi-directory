package openapisdk.models.operations;



public class PostOauthAccessTokenResponse {
    public String contentType;
    public PostOauthAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostOauthAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostOauthAccessToken200ApplicationJson postOauthAccessToken200ApplicationJSONObject;
    public PostOauthAccessTokenResponse withPostOauthAccessToken200ApplicationJsonObject(PostOauthAccessToken200ApplicationJson postOauthAccessToken200ApplicationJSONObject) {
        this.postOauthAccessToken200ApplicationJSONObject = postOauthAccessToken200ApplicationJSONObject;
        return this;
    }
}