package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessSecretVersionResponse
 * Response message for SecretManagerService.AccessSecretVersion.
**/
public class AccessSecretVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccessSecretVersionResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public SecretPayload payload;
    public AccessSecretVersionResponse withPayload(SecretPayload payload) {
        this.payload = payload;
        return this;
    }
}