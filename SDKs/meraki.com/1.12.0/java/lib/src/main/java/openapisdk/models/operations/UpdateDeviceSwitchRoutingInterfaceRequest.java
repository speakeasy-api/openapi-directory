package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchRoutingInterfaceRequest {
    public UpdateDeviceSwitchRoutingInterfacePathParams pathParams;
    public UpdateDeviceSwitchRoutingInterfaceRequest withPathParams(UpdateDeviceSwitchRoutingInterfacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceSwitchRoutingInterfaceRequestBody request;
    public UpdateDeviceSwitchRoutingInterfaceRequest withRequest(UpdateDeviceSwitchRoutingInterfaceRequestBody request) {
        this.request = request;
        return this;
    }
}