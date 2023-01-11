package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectCustomerEncryption
 * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
**/
public class ObjectCustomerEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionAlgorithm")
    public String encryptionAlgorithm;
    public ObjectCustomerEncryption withEncryptionAlgorithm(String encryptionAlgorithm) {
        this.encryptionAlgorithm = encryptionAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keySha256")
    public String keySha256;
    public ObjectCustomerEncryption withKeySha256(String keySha256) {
        this.keySha256 = keySha256;
        return this;
    }
}