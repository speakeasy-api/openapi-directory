package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OauthAccessTokenResponse
 * Access token response to client apps
**/
public class OauthAccessTokenResponse {
    @JsonProperty("access_token")
    public String accessToken;
    public OauthAccessTokenResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Long expiresIn;
    public OauthAccessTokenResponse withExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_token")
    public String refreshToken;
    public OauthAccessTokenResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonProperty("token_type")
    public String tokenType;
    public OauthAccessTokenResponse withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_token")
    public String userToken;
    public OauthAccessTokenResponse withUserToken(String userToken) {
        this.userToken = userToken;
        return this;
    }
}