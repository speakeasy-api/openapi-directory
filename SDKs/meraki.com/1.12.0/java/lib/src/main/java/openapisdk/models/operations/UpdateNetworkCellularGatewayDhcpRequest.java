package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCellularGatewayDhcpRequest {
    public UpdateNetworkCellularGatewayDhcpPathParams pathParams;
    public UpdateNetworkCellularGatewayDhcpRequest withPathParams(UpdateNetworkCellularGatewayDhcpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkCellularGatewayDhcpRequestBody request;
    public UpdateNetworkCellularGatewayDhcpRequest withRequest(UpdateNetworkCellularGatewayDhcpRequestBody request) {
        this.request = request;
        return this;
    }
}