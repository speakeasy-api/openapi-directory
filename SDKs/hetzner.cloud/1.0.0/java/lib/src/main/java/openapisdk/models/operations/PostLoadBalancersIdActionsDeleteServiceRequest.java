package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsDeleteServiceRequest {
    public PostLoadBalancersIdActionsDeleteServicePathParams pathParams;
    public PostLoadBalancersIdActionsDeleteServiceRequest withPathParams(PostLoadBalancersIdActionsDeleteServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsDeleteServiceRequestBody request;
    public PostLoadBalancersIdActionsDeleteServiceRequest withRequest(PostLoadBalancersIdActionsDeleteServiceRequestBody request) {
        this.request = request;
        return this;
    }
}