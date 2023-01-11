package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCellularGatewayUplinkRequest {
    public UpdateNetworkCellularGatewayUplinkPathParams pathParams;
    public UpdateNetworkCellularGatewayUplinkRequest withPathParams(UpdateNetworkCellularGatewayUplinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkCellularGatewayUplinkRequestBody request;
    public UpdateNetworkCellularGatewayUplinkRequest withRequest(UpdateNetworkCellularGatewayUplinkRequestBody request) {
        this.request = request;
        return this;
    }
}