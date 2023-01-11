package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityStsV1ExchangeOauthTokenRequest
 * Request message for ExchangeOauthToken
**/
public class GoogleIdentityStsV1ExchangeOauthTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public GoogleIdentityStsV1ExchangeOauthTokenRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GoogleIdentityStsV1ExchangeOauthTokenRequest withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeVerifier")
    public String codeVerifier;
    public GoogleIdentityStsV1ExchangeOauthTokenRequest withCodeVerifier(String codeVerifier) {
        this.codeVerifier = codeVerifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantType")
    public String grantType;
    public GoogleIdentityStsV1ExchangeOauthTokenRequest withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUri")
    public String redirectUri;
    public GoogleIdentityStsV1ExchangeOauthTokenRequest withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public GoogleIdentityStsV1ExchangeOauthTokenRequest withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public GoogleIdentityStsV1ExchangeOauthTokenRequest withScope(String scope) {
        this.scope = scope;
        return this;
    }
}