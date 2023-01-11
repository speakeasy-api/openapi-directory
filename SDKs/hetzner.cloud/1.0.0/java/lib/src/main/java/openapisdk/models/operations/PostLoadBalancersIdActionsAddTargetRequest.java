package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsAddTargetRequest {
    public PostLoadBalancersIdActionsAddTargetPathParams pathParams;
    public PostLoadBalancersIdActionsAddTargetRequest withPathParams(PostLoadBalancersIdActionsAddTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsAddTargetAddTargetRequest request;
    public PostLoadBalancersIdActionsAddTargetRequest withRequest(PostLoadBalancersIdActionsAddTargetAddTargetRequest request) {
        this.request = request;
        return this;
    }
}