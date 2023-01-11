package openapisdk.models.operations;



public class PostOauthRequestTokenResponse {
    public String contentType;
    public PostOauthRequestTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostOauthRequestTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostOauthRequestToken200ApplicationJson postOauthRequestToken200ApplicationJSONObject;
    public PostOauthRequestTokenResponse withPostOauthRequestToken200ApplicationJsonObject(PostOauthRequestToken200ApplicationJson postOauthRequestToken200ApplicationJSONObject) {
        this.postOauthRequestToken200ApplicationJSONObject = postOauthRequestToken200ApplicationJSONObject;
        return this;
    }
}