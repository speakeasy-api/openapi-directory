package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestSyncDevicesRequest
 * Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
**/
public class RequestSyncDevicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentUserId")
    public String agentUserId;
    public RequestSyncDevicesRequest withAgentUserId(String agentUserId) {
        this.agentUserId = agentUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("async")
    public Boolean async;
    public RequestSyncDevicesRequest withAsync(Boolean async) {
        this.async = async;
        return this;
    }
}