package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest {
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams pathParams;
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest withPathParams(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody request;
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest withRequest(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody request) {
        this.request = request;
        return this;
    }
}