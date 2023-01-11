package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyId
 * A KeyId identifies a specific public key, usually by hashing the public key.
**/
public class KeyId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public KeyId withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}