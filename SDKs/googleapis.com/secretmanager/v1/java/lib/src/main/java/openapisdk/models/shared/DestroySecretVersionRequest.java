package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestroySecretVersionRequest
 * Request message for SecretManagerService.DestroySecretVersion.
**/
public class DestroySecretVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DestroySecretVersionRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
}