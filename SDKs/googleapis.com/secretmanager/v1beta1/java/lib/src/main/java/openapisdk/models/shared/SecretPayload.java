package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretPayload
 * A secret payload resource in the Secret Manager API. This contains the sensitive secret data that is associated with a SecretVersion.
**/
public class SecretPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public SecretPayload withData(String data) {
        this.data = data;
        return this;
    }
}