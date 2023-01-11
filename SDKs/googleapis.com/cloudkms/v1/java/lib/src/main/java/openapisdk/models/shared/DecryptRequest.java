package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DecryptRequest
 * Request message for KeyManagementService.Decrypt.
**/
public class DecryptRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAuthenticatedData")
    public String additionalAuthenticatedData;
    public DecryptRequest withAdditionalAuthenticatedData(String additionalAuthenticatedData) {
        this.additionalAuthenticatedData = additionalAuthenticatedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAuthenticatedDataCrc32c")
    public String additionalAuthenticatedDataCrc32c;
    public DecryptRequest withAdditionalAuthenticatedDataCrc32c(String additionalAuthenticatedDataCrc32c) {
        this.additionalAuthenticatedDataCrc32c = additionalAuthenticatedDataCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciphertext")
    public String ciphertext;
    public DecryptRequest withCiphertext(String ciphertext) {
        this.ciphertext = ciphertext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciphertextCrc32c")
    public String ciphertextCrc32c;
    public DecryptRequest withCiphertextCrc32c(String ciphertextCrc32c) {
        this.ciphertextCrc32c = ciphertextCrc32c;
        return this;
    }
}