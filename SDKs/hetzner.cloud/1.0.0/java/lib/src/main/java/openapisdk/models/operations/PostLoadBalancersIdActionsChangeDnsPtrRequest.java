package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsChangeDnsPtrRequest {
    public PostLoadBalancersIdActionsChangeDnsPtrPathParams pathParams;
    public PostLoadBalancersIdActionsChangeDnsPtrRequest withPathParams(PostLoadBalancersIdActionsChangeDnsPtrPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest request;
    public PostLoadBalancersIdActionsChangeDnsPtrRequest withRequest(PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest request) {
        this.request = request;
        return this;
    }
}