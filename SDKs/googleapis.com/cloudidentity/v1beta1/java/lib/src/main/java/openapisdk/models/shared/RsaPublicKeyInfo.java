package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RsaPublicKeyInfo
 * Information of a RSA public key.
**/
public class RsaPublicKeyInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keySize")
    public Integer keySize;
    public RsaPublicKeyInfo withKeySize(Integer keySize) {
        this.keySize = keySize;
        return this;
    }
}