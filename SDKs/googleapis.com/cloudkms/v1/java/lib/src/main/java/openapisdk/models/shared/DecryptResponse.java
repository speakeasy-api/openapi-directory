package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DecryptResponse
 * Response message for KeyManagementService.Decrypt.
**/
public class DecryptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintext")
    public String plaintext;
    public DecryptResponse withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintextCrc32c")
    public String plaintextCrc32c;
    public DecryptResponse withPlaintextCrc32c(String plaintextCrc32c) {
        this.plaintextCrc32c = plaintextCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public DecryptResponseProtectionLevelEnum protectionLevel;
    public DecryptResponse withProtectionLevel(DecryptResponseProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedPrimary")
    public Boolean usedPrimary;
    public DecryptResponse withUsedPrimary(Boolean usedPrimary) {
        this.usedPrimary = usedPrimary;
        return this;
    }
}