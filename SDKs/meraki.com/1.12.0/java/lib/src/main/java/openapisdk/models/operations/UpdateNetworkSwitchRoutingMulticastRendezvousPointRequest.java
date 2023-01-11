package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest {
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams pathParams;
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest withPathParams(UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody request;
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest withRequest(UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody request) {
        this.request = request;
        return this;
    }
}