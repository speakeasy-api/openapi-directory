package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedAgentContactResults {
    @JsonProperty("meta")
    public PaginatedAgentContactResultsMeta meta;
    public PaginatedAgentContactResults withMeta(PaginatedAgentContactResultsMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public AgentContactResult[] response;
    public PaginatedAgentContactResults withResponse(AgentContactResult[] response) {
        this.response = response;
        return this;
    }
}