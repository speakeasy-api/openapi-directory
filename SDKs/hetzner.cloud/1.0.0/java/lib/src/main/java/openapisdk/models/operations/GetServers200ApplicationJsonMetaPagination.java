package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServers200ApplicationJsonMetaPagination {
    @JsonProperty("last_page")
    public Double lastPage;
    public GetServers200ApplicationJsonMetaPagination withLastPage(Double lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonProperty("next_page")
    public Double nextPage;
    public GetServers200ApplicationJsonMetaPagination withNextPage(Double nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonProperty("page")
    public Double page;
    public GetServers200ApplicationJsonMetaPagination withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonProperty("per_page")
    public Double perPage;
    public GetServers200ApplicationJsonMetaPagination withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("previous_page")
    public Double previousPage;
    public GetServers200ApplicationJsonMetaPagination withPreviousPage(Double previousPage) {
        this.previousPage = previousPage;
        return this;
    }
    @JsonProperty("total_entries")
    public Double totalEntries;
    public GetServers200ApplicationJsonMetaPagination withTotalEntries(Double totalEntries) {
        this.totalEntries = totalEntries;
        return this;
    }
}