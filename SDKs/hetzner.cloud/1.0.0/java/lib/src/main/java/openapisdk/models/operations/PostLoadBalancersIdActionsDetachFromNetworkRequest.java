package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsDetachFromNetworkRequest {
    public PostLoadBalancersIdActionsDetachFromNetworkPathParams pathParams;
    public PostLoadBalancersIdActionsDetachFromNetworkRequest withPathParams(PostLoadBalancersIdActionsDetachFromNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsDetachFromNetworkRequestBody request;
    public PostLoadBalancersIdActionsDetachFromNetworkRequest withRequest(PostLoadBalancersIdActionsDetachFromNetworkRequestBody request) {
        this.request = request;
        return this;
    }
}