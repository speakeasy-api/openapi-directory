package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityStsV1betaExchangeTokenRequest
 * Request message for ExchangeToken.
**/
public class GoogleIdentityStsV1betaExchangeTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audience")
    public String audience;
    public GoogleIdentityStsV1betaExchangeTokenRequest withAudience(String audience) {
        this.audience = audience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantType")
    public String grantType;
    public GoogleIdentityStsV1betaExchangeTokenRequest withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String options;
    public GoogleIdentityStsV1betaExchangeTokenRequest withOptions(String options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedTokenType")
    public String requestedTokenType;
    public GoogleIdentityStsV1betaExchangeTokenRequest withRequestedTokenType(String requestedTokenType) {
        this.requestedTokenType = requestedTokenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public GoogleIdentityStsV1betaExchangeTokenRequest withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectToken")
    public String subjectToken;
    public GoogleIdentityStsV1betaExchangeTokenRequest withSubjectToken(String subjectToken) {
        this.subjectToken = subjectToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectTokenType")
    public String subjectTokenType;
    public GoogleIdentityStsV1betaExchangeTokenRequest withSubjectTokenType(String subjectTokenType) {
        this.subjectTokenType = subjectTokenType;
        return this;
    }
}