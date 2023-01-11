package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsRemoveTargetRequest {
    public PostLoadBalancersIdActionsRemoveTargetPathParams pathParams;
    public PostLoadBalancersIdActionsRemoveTargetRequest withPathParams(PostLoadBalancersIdActionsRemoveTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest request;
    public PostLoadBalancersIdActionsRemoveTargetRequest withRequest(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest request) {
        this.request = request;
        return this;
    }
}