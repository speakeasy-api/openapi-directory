package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPlacementGroupsPlacementGroupsResponseMetaPagination {
    @JsonProperty("last_page")
    public Double lastPage;
    public GetPlacementGroupsPlacementGroupsResponseMetaPagination withLastPage(Double lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonProperty("next_page")
    public Double nextPage;
    public GetPlacementGroupsPlacementGroupsResponseMetaPagination withNextPage(Double nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonProperty("page")
    public Double page;
    public GetPlacementGroupsPlacementGroupsResponseMetaPagination withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonProperty("per_page")
    public Double perPage;
    public GetPlacementGroupsPlacementGroupsResponseMetaPagination withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("previous_page")
    public Double previousPage;
    public GetPlacementGroupsPlacementGroupsResponseMetaPagination withPreviousPage(Double previousPage) {
        this.previousPage = previousPage;
        return this;
    }
    @JsonProperty("total_entries")
    public Double totalEntries;
    public GetPlacementGroupsPlacementGroupsResponseMetaPagination withTotalEntries(Double totalEntries) {
        this.totalEntries = totalEntries;
        return this;
    }
}