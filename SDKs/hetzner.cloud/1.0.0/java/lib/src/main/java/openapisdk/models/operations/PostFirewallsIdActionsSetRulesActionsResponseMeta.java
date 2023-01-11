package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsSetRulesActionsResponseMeta {
    @JsonProperty("pagination")
    public PostFirewallsIdActionsSetRulesActionsResponseMetaPagination pagination;
    public PostFirewallsIdActionsSetRulesActionsResponseMeta withPagination(PostFirewallsIdActionsSetRulesActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}