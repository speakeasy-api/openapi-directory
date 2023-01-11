package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DsaPublicKeyInfo
 * Information of a DSA public key.
**/
public class DsaPublicKeyInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keySize")
    public Integer keySize;
    public DsaPublicKeyInfo withKeySize(Integer keySize) {
        this.keySize = keySize;
        return this;
    }
}