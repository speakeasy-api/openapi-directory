package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCryptoKeyPrimaryVersionRequest
 * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
**/
public class UpdateCryptoKeyPrimaryVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyVersionId")
    public String cryptoKeyVersionId;
    public UpdateCryptoKeyPrimaryVersionRequest withCryptoKeyVersionId(String cryptoKeyVersionId) {
        this.cryptoKeyVersionId = cryptoKeyVersionId;
        return this;
    }
}