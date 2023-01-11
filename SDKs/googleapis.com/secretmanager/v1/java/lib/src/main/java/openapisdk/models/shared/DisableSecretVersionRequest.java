package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisableSecretVersionRequest
 * Request message for SecretManagerService.DisableSecretVersion.
**/
public class DisableSecretVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DisableSecretVersionRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
}