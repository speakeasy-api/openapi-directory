package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityStsV1IntrospectTokenRequest
 * Request message for IntrospectToken.
**/
public class GoogleIdentityStsV1IntrospectTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public GoogleIdentityStsV1IntrospectTokenRequest withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenTypeHint")
    public String tokenTypeHint;
    public GoogleIdentityStsV1IntrospectTokenRequest withTokenTypeHint(String tokenTypeHint) {
        this.tokenTypeHint = tokenTypeHint;
        return this;
    }
}