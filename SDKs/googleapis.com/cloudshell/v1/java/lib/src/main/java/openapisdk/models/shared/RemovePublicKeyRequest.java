package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemovePublicKeyRequest
 * Request message for RemovePublicKey.
**/
public class RemovePublicKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public RemovePublicKeyRequest withKey(String key) {
        this.key = key;
        return this;
    }
}