package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptRequest
 * Request message for KeyManagementService.Encrypt.
**/
public class EncryptRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAuthenticatedData")
    public String additionalAuthenticatedData;
    public EncryptRequest withAdditionalAuthenticatedData(String additionalAuthenticatedData) {
        this.additionalAuthenticatedData = additionalAuthenticatedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAuthenticatedDataCrc32c")
    public String additionalAuthenticatedDataCrc32c;
    public EncryptRequest withAdditionalAuthenticatedDataCrc32c(String additionalAuthenticatedDataCrc32c) {
        this.additionalAuthenticatedDataCrc32c = additionalAuthenticatedDataCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintext")
    public String plaintext;
    public EncryptRequest withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintextCrc32c")
    public String plaintextCrc32c;
    public EncryptRequest withPlaintextCrc32c(String plaintextCrc32c) {
        this.plaintextCrc32c = plaintextCrc32c;
        return this;
    }
}