package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SshKey
 * An SSH key, used for authorizing with the interactive serial console feature.
**/
public class SshKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SshKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public SshKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}