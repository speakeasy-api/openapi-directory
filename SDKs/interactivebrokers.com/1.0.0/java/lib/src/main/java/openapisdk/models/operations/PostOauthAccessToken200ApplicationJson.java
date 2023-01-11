package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOauthAccessToken200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_token")
    public String oauthToken;
    public PostOauthAccessToken200ApplicationJson withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_token_secret")
    public String oauthTokenSecret;
    public PostOauthAccessToken200ApplicationJson withOauthTokenSecret(String oauthTokenSecret) {
        this.oauthTokenSecret = oauthTokenSecret;
        return this;
    }
}