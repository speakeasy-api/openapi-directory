package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest {
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams pathParams;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest withPathParams(UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody request;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest withRequest(UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody request) {
        this.request = request;
        return this;
    }
}