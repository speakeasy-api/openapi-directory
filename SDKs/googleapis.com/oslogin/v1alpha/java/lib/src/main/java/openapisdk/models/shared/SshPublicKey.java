package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SshPublicKey
 * The SSH public key information associated with a Google account.
**/
public class SshPublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationTimeUsec")
    public String expirationTimeUsec;
    public SshPublicKey withExpirationTimeUsec(String expirationTimeUsec) {
        this.expirationTimeUsec = expirationTimeUsec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public SshPublicKey withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SshPublicKey withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SshPublicKey withName(String name) {
        this.name = name;
        return this;
    }
}