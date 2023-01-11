package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCellularGatewaySubnetPoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkCellularGatewaySubnetPoolPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}