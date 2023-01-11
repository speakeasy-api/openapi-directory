package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest {
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams pathParams;
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest withPathParams(CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody request;
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest withRequest(CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody request) {
        this.request = request;
        return this;
    }
}