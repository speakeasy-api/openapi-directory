package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedAgentLocationResult {
    @JsonProperty("meta")
    public PaginatedAgentLocationResultMeta meta;
    public PaginatedAgentLocationResult withMeta(PaginatedAgentLocationResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public AgentLocationResult[] response;
    public PaginatedAgentLocationResult withResponse(AgentLocationResult[] response) {
        this.response = response;
        return this;
    }
}