package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStackRoutingStaticRouteRequest {
    public UpdateNetworkSwitchStackRoutingStaticRoutePathParams pathParams;
    public UpdateNetworkSwitchStackRoutingStaticRouteRequest withPathParams(UpdateNetworkSwitchStackRoutingStaticRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchStackRoutingStaticRouteRequestBody request;
    public UpdateNetworkSwitchStackRoutingStaticRouteRequest withRequest(UpdateNetworkSwitchStackRoutingStaticRouteRequestBody request) {
        this.request = request;
        return this;
    }
}