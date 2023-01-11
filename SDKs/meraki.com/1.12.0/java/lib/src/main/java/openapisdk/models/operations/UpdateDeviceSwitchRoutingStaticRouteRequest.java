package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchRoutingStaticRouteRequest {
    public UpdateDeviceSwitchRoutingStaticRoutePathParams pathParams;
    public UpdateDeviceSwitchRoutingStaticRouteRequest withPathParams(UpdateDeviceSwitchRoutingStaticRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceSwitchRoutingStaticRouteRequestBody request;
    public UpdateDeviceSwitchRoutingStaticRouteRequest withRequest(UpdateDeviceSwitchRoutingStaticRouteRequestBody request) {
        this.request = request;
        return this;
    }
}