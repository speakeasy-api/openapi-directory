package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalGenerateSecretResponse
 * Response for GenerateSecret.
**/
public class SasPortalGenerateSecretResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SasPortalGenerateSecretResponse withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}