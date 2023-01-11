package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnableSecretVersionRequest
 * Request message for SecretManagerService.EnableSecretVersion.
**/
public class EnableSecretVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public EnableSecretVersionRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
}