package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommitteeList {
    @JsonProperty("pagination")
    public PaginationMeta pagination;
    public CommitteeList withPagination(PaginationMeta pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonProperty("results")
    public Committee[] results;
    public CommitteeList withResults(Committee[] results) {
        this.results = results;
        return this;
    }
}