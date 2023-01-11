package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Keys
 * The Nexmo product that you access with this application.
**/
public class Keys {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_key")
    public String publicKey;
    public Keys withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}