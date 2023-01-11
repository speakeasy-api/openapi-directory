package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStackRoutingInterfaceRequest {
    public UpdateNetworkSwitchStackRoutingInterfacePathParams pathParams;
    public UpdateNetworkSwitchStackRoutingInterfaceRequest withPathParams(UpdateNetworkSwitchStackRoutingInterfacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBody request;
    public UpdateNetworkSwitchStackRoutingInterfaceRequest withRequest(UpdateNetworkSwitchStackRoutingInterfaceRequestBody request) {
        this.request = request;
        return this;
    }
}