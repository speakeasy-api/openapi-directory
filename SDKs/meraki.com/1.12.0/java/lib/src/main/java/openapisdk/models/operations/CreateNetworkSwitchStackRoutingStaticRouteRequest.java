package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchStackRoutingStaticRouteRequest {
    public CreateNetworkSwitchStackRoutingStaticRoutePathParams pathParams;
    public CreateNetworkSwitchStackRoutingStaticRouteRequest withPathParams(CreateNetworkSwitchStackRoutingStaticRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchStackRoutingStaticRouteRequestBody request;
    public CreateNetworkSwitchStackRoutingStaticRouteRequest withRequest(CreateNetworkSwitchStackRoutingStaticRouteRequestBody request) {
        this.request = request;
        return this;
    }
}