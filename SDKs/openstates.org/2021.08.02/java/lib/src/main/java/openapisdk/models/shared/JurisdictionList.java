package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JurisdictionList {
    @JsonProperty("pagination")
    public PaginationMeta pagination;
    public JurisdictionList withPagination(PaginationMeta pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonProperty("results")
    public Jurisdiction[] results;
    public JurisdictionList withResults(Jurisdiction[] results) {
        this.results = results;
        return this;
    }
}