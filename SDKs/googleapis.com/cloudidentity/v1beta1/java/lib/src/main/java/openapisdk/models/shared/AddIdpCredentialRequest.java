package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddIdpCredentialRequest
 * The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.
**/
public class AddIdpCredentialRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemData")
    public String pemData;
    public AddIdpCredentialRequest withPemData(String pemData) {
        this.pemData = pemData;
        return this;
    }
}