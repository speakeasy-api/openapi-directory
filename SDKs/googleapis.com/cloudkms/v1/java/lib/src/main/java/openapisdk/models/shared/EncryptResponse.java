package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptResponse
 * Response message for KeyManagementService.Encrypt.
**/
public class EncryptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciphertext")
    public String ciphertext;
    public EncryptResponse withCiphertext(String ciphertext) {
        this.ciphertext = ciphertext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciphertextCrc32c")
    public String ciphertextCrc32c;
    public EncryptResponse withCiphertextCrc32c(String ciphertextCrc32c) {
        this.ciphertextCrc32c = ciphertextCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EncryptResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public EncryptResponseProtectionLevelEnum protectionLevel;
    public EncryptResponse withProtectionLevel(EncryptResponseProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedAdditionalAuthenticatedDataCrc32c")
    public Boolean verifiedAdditionalAuthenticatedDataCrc32c;
    public EncryptResponse withVerifiedAdditionalAuthenticatedDataCrc32c(Boolean verifiedAdditionalAuthenticatedDataCrc32c) {
        this.verifiedAdditionalAuthenticatedDataCrc32c = verifiedAdditionalAuthenticatedDataCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedPlaintextCrc32c")
    public Boolean verifiedPlaintextCrc32c;
    public EncryptResponse withVerifiedPlaintextCrc32c(Boolean verifiedPlaintextCrc32c) {
        this.verifiedPlaintextCrc32c = verifiedPlaintextCrc32c;
        return this;
    }
}