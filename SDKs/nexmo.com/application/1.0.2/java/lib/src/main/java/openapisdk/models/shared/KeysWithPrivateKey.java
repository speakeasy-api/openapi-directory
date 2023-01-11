package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeysWithPrivateKey
 * The Nexmo product that you access with this application.
**/
public class KeysWithPrivateKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_key")
    public String privateKey;
    public KeysWithPrivateKey withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_key")
    public String publicKey;
    public KeysWithPrivateKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}