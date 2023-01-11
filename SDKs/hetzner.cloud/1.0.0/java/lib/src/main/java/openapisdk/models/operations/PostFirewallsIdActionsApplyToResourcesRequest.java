package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFirewallsIdActionsApplyToResourcesRequest {
    public PostFirewallsIdActionsApplyToResourcesPathParams pathParams;
    public PostFirewallsIdActionsApplyToResourcesRequest withPathParams(PostFirewallsIdActionsApplyToResourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest request;
    public PostFirewallsIdActionsApplyToResourcesRequest withRequest(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest request) {
        this.request = request;
        return this;
    }
}