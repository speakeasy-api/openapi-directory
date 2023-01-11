package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AsymmetricDecryptRequest
 * Request message for KeyManagementService.AsymmetricDecrypt.
**/
public class AsymmetricDecryptRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciphertext")
    public String ciphertext;
    public AsymmetricDecryptRequest withCiphertext(String ciphertext) {
        this.ciphertext = ciphertext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciphertextCrc32c")
    public String ciphertextCrc32c;
    public AsymmetricDecryptRequest withCiphertextCrc32c(String ciphertextCrc32c) {
        this.ciphertextCrc32c = ciphertextCrc32c;
        return this;
    }
}