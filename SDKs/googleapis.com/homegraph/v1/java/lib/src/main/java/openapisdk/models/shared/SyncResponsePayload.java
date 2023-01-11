package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SyncResponsePayload
 * Payload containing device information.
**/
public class SyncResponsePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentUserId")
    public String agentUserId;
    public SyncResponsePayload withAgentUserId(String agentUserId) {
        this.agentUserId = agentUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public Device[] devices;
    public SyncResponsePayload withDevices(Device[] devices) {
        this.devices = devices;
        return this;
    }
}