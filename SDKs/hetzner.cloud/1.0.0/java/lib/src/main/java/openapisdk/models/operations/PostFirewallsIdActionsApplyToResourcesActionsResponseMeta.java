package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsApplyToResourcesActionsResponseMeta {
    @JsonProperty("pagination")
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination pagination;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMeta withPagination(PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}