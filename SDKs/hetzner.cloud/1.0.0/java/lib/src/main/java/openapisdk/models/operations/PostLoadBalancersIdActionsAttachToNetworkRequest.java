package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsAttachToNetworkRequest {
    public PostLoadBalancersIdActionsAttachToNetworkPathParams pathParams;
    public PostLoadBalancersIdActionsAttachToNetworkRequest withPathParams(PostLoadBalancersIdActionsAttachToNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsAttachToNetworkRequestBody request;
    public PostLoadBalancersIdActionsAttachToNetworkRequest withRequest(PostLoadBalancersIdActionsAttachToNetworkRequestBody request) {
        this.request = request;
        return this;
    }
}