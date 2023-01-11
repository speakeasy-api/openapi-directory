package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOauthRequestToken200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_token")
    public String oauthToken;
    public PostOauthRequestToken200ApplicationJson withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
}