package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignBlobRequest
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob request.
**/
public class SignBlobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesToSign")
    public String bytesToSign;
    public SignBlobRequest withBytesToSign(String bytesToSign) {
        this.bytesToSign = bytesToSign;
        return this;
    }
}