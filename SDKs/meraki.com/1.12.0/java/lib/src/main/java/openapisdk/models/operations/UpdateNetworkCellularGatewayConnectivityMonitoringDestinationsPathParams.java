package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}