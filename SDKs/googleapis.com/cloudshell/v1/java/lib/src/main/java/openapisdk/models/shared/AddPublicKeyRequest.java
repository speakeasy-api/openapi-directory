package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddPublicKeyRequest
 * Request message for AddPublicKey.
**/
public class AddPublicKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public AddPublicKeyRequest withKey(String key) {
        this.key = key;
        return this;
    }
}