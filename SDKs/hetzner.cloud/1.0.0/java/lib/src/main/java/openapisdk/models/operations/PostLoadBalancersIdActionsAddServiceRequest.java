package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsAddServiceRequest {
    public PostLoadBalancersIdActionsAddServicePathParams pathParams;
    public PostLoadBalancersIdActionsAddServiceRequest withPathParams(PostLoadBalancersIdActionsAddServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsAddServiceLoadBalancerService request;
    public PostLoadBalancersIdActionsAddServiceRequest withRequest(PostLoadBalancersIdActionsAddServiceLoadBalancerService request) {
        this.request = request;
        return this;
    }
}