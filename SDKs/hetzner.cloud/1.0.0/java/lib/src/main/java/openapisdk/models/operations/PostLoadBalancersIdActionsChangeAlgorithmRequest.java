package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsChangeAlgorithmRequest {
    public PostLoadBalancersIdActionsChangeAlgorithmPathParams pathParams;
    public PostLoadBalancersIdActionsChangeAlgorithmRequest withPathParams(PostLoadBalancersIdActionsChangeAlgorithmPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsChangeAlgorithmRequestBody request;
    public PostLoadBalancersIdActionsChangeAlgorithmRequest withRequest(PostLoadBalancersIdActionsChangeAlgorithmRequestBody request) {
        this.request = request;
        return this;
    }
}