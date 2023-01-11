package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedGroupApplicationResult {
    @JsonProperty("meta")
    public PaginatedGroupApplicationResultMeta meta;
    public PaginatedGroupApplicationResult withMeta(PaginatedGroupApplicationResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public GroupApplicationResult[] response;
    public PaginatedGroupApplicationResult withResponse(GroupApplicationResult[] response) {
        this.response = response;
        return this;
    }
}