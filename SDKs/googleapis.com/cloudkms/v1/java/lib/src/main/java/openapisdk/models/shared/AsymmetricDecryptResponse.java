package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AsymmetricDecryptResponse
 * Response message for KeyManagementService.AsymmetricDecrypt.
**/
public class AsymmetricDecryptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintext")
    public String plaintext;
    public AsymmetricDecryptResponse withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintextCrc32c")
    public String plaintextCrc32c;
    public AsymmetricDecryptResponse withPlaintextCrc32c(String plaintextCrc32c) {
        this.plaintextCrc32c = plaintextCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public AsymmetricDecryptResponseProtectionLevelEnum protectionLevel;
    public AsymmetricDecryptResponse withProtectionLevel(AsymmetricDecryptResponseProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedCiphertextCrc32c")
    public Boolean verifiedCiphertextCrc32c;
    public AsymmetricDecryptResponse withVerifiedCiphertextCrc32c(Boolean verifiedCiphertextCrc32c) {
        this.verifiedCiphertextCrc32c = verifiedCiphertextCrc32c;
        return this;
    }
}