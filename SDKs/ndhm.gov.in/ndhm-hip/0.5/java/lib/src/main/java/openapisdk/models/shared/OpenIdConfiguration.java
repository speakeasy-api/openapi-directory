package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenIdConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwks_uri")
    public String jwksUri;
    public OpenIdConfiguration withJwksUri(String jwksUri) {
        this.jwksUri = jwksUri;
        return this;
    }
}