package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignJwtResponse
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.
**/
public class SignJwtResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public SignJwtResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signedJwt")
    public String signedJwt;
    public SignJwtResponse withSignedJwt(String signedJwt) {
        this.signedJwt = signedJwt;
        return this;
    }
}