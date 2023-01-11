package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCellularGatewayDhcpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkCellularGatewayDhcpPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}