package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedDependentResult {
    @JsonProperty("meta")
    public PaginatedDependentResultMeta meta;
    public PaginatedDependentResult withMeta(PaginatedDependentResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public DependentResult[] response;
    public PaginatedDependentResult withResponse(DependentResult[] response) {
        this.response = response;
        return this;
    }
}