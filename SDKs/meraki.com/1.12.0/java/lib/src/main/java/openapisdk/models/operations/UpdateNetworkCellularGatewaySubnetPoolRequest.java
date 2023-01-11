package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCellularGatewaySubnetPoolRequest {
    public UpdateNetworkCellularGatewaySubnetPoolPathParams pathParams;
    public UpdateNetworkCellularGatewaySubnetPoolRequest withPathParams(UpdateNetworkCellularGatewaySubnetPoolPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkCellularGatewaySubnetPoolRequestBody request;
    public UpdateNetworkCellularGatewaySubnetPoolRequest withRequest(UpdateNetworkCellularGatewaySubnetPoolRequestBody request) {
        this.request = request;
        return this;
    }
}