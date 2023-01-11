package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedGroupCoverageResult {
    @JsonProperty("meta")
    public PaginatedGroupCoverageResultMeta meta;
    public PaginatedGroupCoverageResult withMeta(PaginatedGroupCoverageResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public GroupCoverageResult[] response;
    public PaginatedGroupCoverageResult withResponse(GroupCoverageResult[] response) {
        this.response = response;
        return this;
    }
}