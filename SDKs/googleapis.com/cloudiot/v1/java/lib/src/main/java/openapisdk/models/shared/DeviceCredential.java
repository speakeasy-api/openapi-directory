package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceCredential
 * A server-stored device credential used for authentication.
**/
public class DeviceCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationTime")
    public String expirationTime;
    public DeviceCredential withExpirationTime(String expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public PublicKeyCredential publicKey;
    public DeviceCredential withPublicKey(PublicKeyCredential publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}