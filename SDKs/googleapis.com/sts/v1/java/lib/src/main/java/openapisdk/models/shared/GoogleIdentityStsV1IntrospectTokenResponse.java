package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityStsV1IntrospectTokenResponse
 * Response message for IntrospectToken.
**/
public class GoogleIdentityStsV1IntrospectTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public GoogleIdentityStsV1IntrospectTokenResponse withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public GoogleIdentityStsV1IntrospectTokenResponse withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp")
    public String exp;
    public GoogleIdentityStsV1IntrospectTokenResponse withExp(String exp) {
        this.exp = exp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iat")
    public String iat;
    public GoogleIdentityStsV1IntrospectTokenResponse withIat(String iat) {
        this.iat = iat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iss")
    public String iss;
    public GoogleIdentityStsV1IntrospectTokenResponse withIss(String iss) {
        this.iss = iss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public GoogleIdentityStsV1IntrospectTokenResponse withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub")
    public String sub;
    public GoogleIdentityStsV1IntrospectTokenResponse withSub(String sub) {
        this.sub = sub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public GoogleIdentityStsV1IntrospectTokenResponse withUsername(String username) {
        this.username = username;
        return this;
    }
}