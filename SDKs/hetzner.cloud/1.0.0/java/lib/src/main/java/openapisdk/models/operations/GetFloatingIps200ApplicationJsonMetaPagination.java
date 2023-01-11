package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIps200ApplicationJsonMetaPagination {
    @JsonProperty("last_page")
    public Double lastPage;
    public GetFloatingIps200ApplicationJsonMetaPagination withLastPage(Double lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonProperty("next_page")
    public Double nextPage;
    public GetFloatingIps200ApplicationJsonMetaPagination withNextPage(Double nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonProperty("page")
    public Double page;
    public GetFloatingIps200ApplicationJsonMetaPagination withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonProperty("per_page")
    public Double perPage;
    public GetFloatingIps200ApplicationJsonMetaPagination withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("previous_page")
    public Double previousPage;
    public GetFloatingIps200ApplicationJsonMetaPagination withPreviousPage(Double previousPage) {
        this.previousPage = previousPage;
        return this;
    }
    @JsonProperty("total_entries")
    public Double totalEntries;
    public GetFloatingIps200ApplicationJsonMetaPagination withTotalEntries(Double totalEntries) {
        this.totalEntries = totalEntries;
        return this;
    }
}