package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SyncRequest
 * Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
**/
public class SyncRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentUserId")
    public String agentUserId;
    public SyncRequest withAgentUserId(String agentUserId) {
        this.agentUserId = agentUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public SyncRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}