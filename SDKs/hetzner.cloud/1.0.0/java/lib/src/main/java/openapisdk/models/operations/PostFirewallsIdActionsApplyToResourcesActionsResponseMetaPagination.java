package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination {
    @JsonProperty("last_page")
    public Double lastPage;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination withLastPage(Double lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonProperty("next_page")
    public Double nextPage;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination withNextPage(Double nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonProperty("page")
    public Double page;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonProperty("per_page")
    public Double perPage;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("previous_page")
    public Double previousPage;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination withPreviousPage(Double previousPage) {
        this.previousPage = previousPage;
        return this;
    }
    @JsonProperty("total_entries")
    public Double totalEntries;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination withTotalEntries(Double totalEntries) {
        this.totalEntries = totalEntries;
        return this;
    }
}