package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchRoutingMulticastRequest {
    public UpdateNetworkSwitchRoutingMulticastPathParams pathParams;
    public UpdateNetworkSwitchRoutingMulticastRequest withPathParams(UpdateNetworkSwitchRoutingMulticastPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchRoutingMulticastRequestBody request;
    public UpdateNetworkSwitchRoutingMulticastRequest withRequest(UpdateNetworkSwitchRoutingMulticastRequestBody request) {
        this.request = request;
        return this;
    }
}