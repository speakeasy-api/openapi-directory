package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebAuthn
 * Security key information specific to the Web Authentication protocol.
**/
public class WebAuthn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rpId")
    public String rpId;
    public WebAuthn withRpId(String rpId) {
        this.rpId = rpId;
        return this;
    }
}