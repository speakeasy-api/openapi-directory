package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchRoutingInterfaceDhcpRequest {
    public UpdateDeviceSwitchRoutingInterfaceDhcpPathParams pathParams;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequest withPathParams(UpdateDeviceSwitchRoutingInterfaceDhcpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody request;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequest withRequest(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody request) {
        this.request = request;
        return this;
    }
}