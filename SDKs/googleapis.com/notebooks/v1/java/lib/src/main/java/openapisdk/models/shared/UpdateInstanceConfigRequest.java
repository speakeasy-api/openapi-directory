package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateInstanceConfigRequest
 * Request for updating instance configurations.
**/
public class UpdateInstanceConfigRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public InstanceConfig config;
    public UpdateInstanceConfigRequest withConfig(InstanceConfig config) {
        this.config = config;
        return this;
    }
}