package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersCreateLoadBalancerRequest request;
    public PostLoadBalancersRequest withRequest(PostLoadBalancersCreateLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}