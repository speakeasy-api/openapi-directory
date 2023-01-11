package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedCoveragePlanResult {
    @JsonProperty("meta")
    public PaginatedCoveragePlanResultMeta meta;
    public PaginatedCoveragePlanResult withMeta(PaginatedCoveragePlanResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public CoveragePlanResult[] response;
    public PaginatedCoveragePlanResult withResponse(CoveragePlanResult[] response) {
        this.response = response;
        return this;
    }
}