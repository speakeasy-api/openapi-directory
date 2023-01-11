package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedAgentResult {
    @JsonProperty("meta")
    public PaginatedAgentResultMeta meta;
    public PaginatedAgentResult withMeta(PaginatedAgentResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public AgentResult[] response;
    public PaginatedAgentResult withResponse(AgentResult[] response) {
        this.response = response;
        return this;
    }
}