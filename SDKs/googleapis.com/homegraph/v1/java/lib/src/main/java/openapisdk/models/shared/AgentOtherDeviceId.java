package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentOtherDeviceId
 * Alternate third-party device ID.
**/
public class AgentOtherDeviceId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentId")
    public String agentId;
    public AgentOtherDeviceId withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public AgentOtherDeviceId withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}