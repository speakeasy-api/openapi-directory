package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest {
    @JsonProperty("remove_from")
    public PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources[] removeFrom;
    public PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest withRemoveFrom(PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources[] removeFrom) {
        this.removeFrom = removeFrom;
        return this;
    }
}