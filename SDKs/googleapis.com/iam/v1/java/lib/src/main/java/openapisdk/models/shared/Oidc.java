package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Oidc
 * Represents an OpenId Connect 1.0 identity provider.
**/
public class Oidc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedAudiences")
    public String[] allowedAudiences;
    public Oidc withAllowedAudiences(String[] allowedAudiences) {
        this.allowedAudiences = allowedAudiences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerUri")
    public String issuerUri;
    public Oidc withIssuerUri(String issuerUri) {
        this.issuerUri = issuerUri;
        return this;
    }
}