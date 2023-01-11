package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddSecretVersionRequest
 * Request message for SecretManagerService.AddSecretVersion.
**/
public class AddSecretVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public SecretPayload payload;
    public AddSecretVersionRequest withPayload(SecretPayload payload) {
        this.payload = payload;
        return this;
    }
}