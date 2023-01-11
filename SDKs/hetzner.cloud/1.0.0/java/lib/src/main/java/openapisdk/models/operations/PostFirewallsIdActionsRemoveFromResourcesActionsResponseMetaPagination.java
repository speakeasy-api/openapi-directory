package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination {
    @JsonProperty("last_page")
    public Double lastPage;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination withLastPage(Double lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonProperty("next_page")
    public Double nextPage;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination withNextPage(Double nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonProperty("page")
    public Double page;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonProperty("per_page")
    public Double perPage;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("previous_page")
    public Double previousPage;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination withPreviousPage(Double previousPage) {
        this.previousPage = previousPage;
        return this;
    }
    @JsonProperty("total_entries")
    public Double totalEntries;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination withTotalEntries(Double totalEntries) {
        this.totalEntries = totalEntries;
        return this;
    }
}