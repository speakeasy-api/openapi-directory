package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConvertAccessTokenRequestBody {
    @JsonProperty("grant_type")
    public ConvertAccessTokenRequestBodyGrantTypeEnum grantType;
    public ConvertAccessTokenRequestBody withGrantType(ConvertAccessTokenRequestBodyGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public ConvertAccessTokenRequestBody withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonProperty("token_secret")
    public String tokenSecret;
    public ConvertAccessTokenRequestBody withTokenSecret(String tokenSecret) {
        this.tokenSecret = tokenSecret;
        return this;
    }
}