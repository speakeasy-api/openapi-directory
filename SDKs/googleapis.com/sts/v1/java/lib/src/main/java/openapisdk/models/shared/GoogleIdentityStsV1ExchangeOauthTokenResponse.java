package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityStsV1ExchangeOauthTokenResponse
 * Response message for ExchangeOauthToken. see https://www.rfc-editor.org/rfc/rfc6749#section-5.1
**/
public class GoogleIdentityStsV1ExchangeOauthTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public GoogleIdentityStsV1ExchangeOauthTokenResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Integer expiresIn;
    public GoogleIdentityStsV1ExchangeOauthTokenResponse withExpiresIn(Integer expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_token")
    public String refreshToken;
    public GoogleIdentityStsV1ExchangeOauthTokenResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public GoogleIdentityStsV1ExchangeOauthTokenResponse withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_type")
    public String tokenType;
    public GoogleIdentityStsV1ExchangeOauthTokenResponse withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
}