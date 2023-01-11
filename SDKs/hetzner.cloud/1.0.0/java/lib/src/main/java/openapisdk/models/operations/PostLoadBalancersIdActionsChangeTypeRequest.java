package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsChangeTypeRequest {
    public PostLoadBalancersIdActionsChangeTypePathParams pathParams;
    public PostLoadBalancersIdActionsChangeTypeRequest withPathParams(PostLoadBalancersIdActionsChangeTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsChangeTypeChangeTypeRequest request;
    public PostLoadBalancersIdActionsChangeTypeRequest withRequest(PostLoadBalancersIdActionsChangeTypeChangeTypeRequest request) {
        this.request = request;
        return this;
    }
}