package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkCellularGatewayDhcpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkCellularGatewayDhcpPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}