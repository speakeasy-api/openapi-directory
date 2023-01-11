package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityStsV1betaExchangeTokenResponse
 * Response message for ExchangeToken.
**/
public class GoogleIdentityStsV1betaExchangeTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public GoogleIdentityStsV1betaExchangeTokenResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Integer expiresIn;
    public GoogleIdentityStsV1betaExchangeTokenResponse withExpiresIn(Integer expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issued_token_type")
    public String issuedTokenType;
    public GoogleIdentityStsV1betaExchangeTokenResponse withIssuedTokenType(String issuedTokenType) {
        this.issuedTokenType = issuedTokenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_type")
    public String tokenType;
    public GoogleIdentityStsV1betaExchangeTokenResponse withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
}