package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryRequestPayload
 * Payload containing device IDs.
**/
public class QueryRequestPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public AgentDeviceId[] devices;
    public QueryRequestPayload withDevices(AgentDeviceId[] devices) {
        this.devices = devices;
        return this;
    }
}