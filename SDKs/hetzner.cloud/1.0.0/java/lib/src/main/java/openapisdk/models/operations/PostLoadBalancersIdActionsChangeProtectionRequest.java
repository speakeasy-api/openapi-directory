package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsChangeProtectionRequest {
    public PostLoadBalancersIdActionsChangeProtectionPathParams pathParams;
    public PostLoadBalancersIdActionsChangeProtectionRequest withPathParams(PostLoadBalancersIdActionsChangeProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsChangeProtectionRequestBody request;
    public PostLoadBalancersIdActionsChangeProtectionRequest withRequest(PostLoadBalancersIdActionsChangeProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}