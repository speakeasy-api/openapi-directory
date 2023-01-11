package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdActionsActionsResponseMetaPagination {
    @JsonProperty("last_page")
    public Double lastPage;
    public GetServersIdActionsActionsResponseMetaPagination withLastPage(Double lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonProperty("next_page")
    public Double nextPage;
    public GetServersIdActionsActionsResponseMetaPagination withNextPage(Double nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonProperty("page")
    public Double page;
    public GetServersIdActionsActionsResponseMetaPagination withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonProperty("per_page")
    public Double perPage;
    public GetServersIdActionsActionsResponseMetaPagination withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("previous_page")
    public Double previousPage;
    public GetServersIdActionsActionsResponseMetaPagination withPreviousPage(Double previousPage) {
        this.previousPage = previousPage;
        return this;
    }
    @JsonProperty("total_entries")
    public Double totalEntries;
    public GetServersIdActionsActionsResponseMetaPagination withTotalEntries(Double totalEntries) {
        this.totalEntries = totalEntries;
        return this;
    }
}