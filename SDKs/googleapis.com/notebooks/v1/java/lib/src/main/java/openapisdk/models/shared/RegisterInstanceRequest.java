package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterInstanceRequest
 * Request for registering a notebook instance.
**/
public class RegisterInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public RegisterInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}