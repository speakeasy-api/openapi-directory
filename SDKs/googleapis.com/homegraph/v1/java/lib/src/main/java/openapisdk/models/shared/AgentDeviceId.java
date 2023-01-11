package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentDeviceId
 * Third-party device ID for one device.
**/
public class AgentDeviceId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AgentDeviceId withId(String id) {
        this.id = id;
        return this;
    }
}