package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillList {
    @JsonProperty("pagination")
    public PaginationMeta pagination;
    public BillList withPagination(PaginationMeta pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonProperty("results")
    public Bill[] results;
    public BillList withResults(Bill[] results) {
        this.results = results;
        return this;
    }
}