package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SshKeyInput
 * An SSH key, used for authorizing with the interactive serial console feature.
**/
public class SshKeyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public SshKeyInput withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}