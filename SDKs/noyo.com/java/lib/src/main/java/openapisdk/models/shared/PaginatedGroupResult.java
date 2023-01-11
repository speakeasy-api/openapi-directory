package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedGroupResult {
    @JsonProperty("meta")
    public PaginatedGroupResultMeta meta;
    public PaginatedGroupResult withMeta(PaginatedGroupResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public GroupResult[] response;
    public PaginatedGroupResult withResponse(GroupResult[] response) {
        this.response = response;
        return this;
    }
}