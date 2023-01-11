package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest {
    public CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams pathParams;
    public CreateNetworkSwitchRoutingMulticastRendezvousPointRequest withPathParams(CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody request;
    public CreateNetworkSwitchRoutingMulticastRendezvousPointRequest withRequest(CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody request) {
        this.request = request;
        return this;
    }
}