package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UploadServiceAccountKeyRequest
 * The service account key upload request.
**/
public class UploadServiceAccountKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeyData")
    public String publicKeyData;
    public UploadServiceAccountKeyRequest withPublicKeyData(String publicKeyData) {
        this.publicKeyData = publicKeyData;
        return this;
    }
}