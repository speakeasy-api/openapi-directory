package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest {
    public UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams pathParams;
    public UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest withPathParams(UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody request;
    public UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest withRequest(UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody request) {
        this.request = request;
        return this;
    }
}