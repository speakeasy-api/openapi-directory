package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}