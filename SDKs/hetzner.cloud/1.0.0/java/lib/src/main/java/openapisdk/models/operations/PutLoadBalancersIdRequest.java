package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLoadBalancersIdRequest {
    public PutLoadBalancersIdPathParams pathParams;
    public PutLoadBalancersIdRequest withPathParams(PutLoadBalancersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutLoadBalancersIdRequestBody request;
    public PutLoadBalancersIdRequest withRequest(PutLoadBalancersIdRequestBody request) {
        this.request = request;
        return this;
    }
}