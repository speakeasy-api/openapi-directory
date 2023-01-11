package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFirewallsIdActionsRemoveFromResourcesRequest {
    public PostFirewallsIdActionsRemoveFromResourcesPathParams pathParams;
    public PostFirewallsIdActionsRemoveFromResourcesRequest withPathParams(PostFirewallsIdActionsRemoveFromResourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest request;
    public PostFirewallsIdActionsRemoveFromResourcesRequest withRequest(PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest request) {
        this.request = request;
        return this;
    }
}