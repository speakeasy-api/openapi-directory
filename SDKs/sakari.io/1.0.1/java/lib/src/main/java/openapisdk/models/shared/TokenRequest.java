package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public TokenRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_secret")
    public String clientSecret;
    public TokenRequest withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grant_type")
    public String grantType;
    public TokenRequest withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
}