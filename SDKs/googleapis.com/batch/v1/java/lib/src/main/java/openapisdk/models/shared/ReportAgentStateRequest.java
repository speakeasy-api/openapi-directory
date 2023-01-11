package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportAgentStateRequest
 * Request to report agent's state. The Request itself implies the agent is healthy.
**/
public class ReportAgentStateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentInfo")
    public AgentInfo agentInfo;
    public ReportAgentStateRequest withAgentInfo(AgentInfo agentInfo) {
        this.agentInfo = agentInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public AgentMetadata metadata;
    public ReportAgentStateRequest withMetadata(AgentMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}