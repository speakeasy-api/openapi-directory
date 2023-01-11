package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}