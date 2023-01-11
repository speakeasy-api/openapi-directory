package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SshPublicKeyInput
 * The SSH public key information associated with a Google account.
**/
public class SshPublicKeyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationTimeUsec")
    public String expirationTimeUsec;
    public SshPublicKeyInput withExpirationTimeUsec(String expirationTimeUsec) {
        this.expirationTimeUsec = expirationTimeUsec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SshPublicKeyInput withKey(String key) {
        this.key = key;
        return this;
    }
}