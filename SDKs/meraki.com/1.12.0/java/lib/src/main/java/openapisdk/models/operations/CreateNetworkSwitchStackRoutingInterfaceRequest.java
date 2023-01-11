package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchStackRoutingInterfaceRequest {
    public CreateNetworkSwitchStackRoutingInterfacePathParams pathParams;
    public CreateNetworkSwitchStackRoutingInterfaceRequest withPathParams(CreateNetworkSwitchStackRoutingInterfacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody request;
    public CreateNetworkSwitchStackRoutingInterfaceRequest withRequest(CreateNetworkSwitchStackRoutingInterfaceRequestBody request) {
        this.request = request;
        return this;
    }
}