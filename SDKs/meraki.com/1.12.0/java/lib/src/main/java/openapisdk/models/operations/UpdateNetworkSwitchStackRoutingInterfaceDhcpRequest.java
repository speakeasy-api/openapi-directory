package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest {
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams pathParams;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest withPathParams(UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody request;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest withRequest(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody request) {
        this.request = request;
        return this;
    }
}