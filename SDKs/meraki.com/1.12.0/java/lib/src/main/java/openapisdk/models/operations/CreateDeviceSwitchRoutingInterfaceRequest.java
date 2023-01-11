package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeviceSwitchRoutingInterfaceRequest {
    public CreateDeviceSwitchRoutingInterfacePathParams pathParams;
    public CreateDeviceSwitchRoutingInterfaceRequest withPathParams(CreateDeviceSwitchRoutingInterfacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDeviceSwitchRoutingInterfaceRequestBody request;
    public CreateDeviceSwitchRoutingInterfaceRequest withRequest(CreateDeviceSwitchRoutingInterfaceRequestBody request) {
        this.request = request;
        return this;
    }
}