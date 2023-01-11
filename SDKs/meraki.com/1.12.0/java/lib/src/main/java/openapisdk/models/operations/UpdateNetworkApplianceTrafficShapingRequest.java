package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingRequest {
    public UpdateNetworkApplianceTrafficShapingPathParams pathParams;
    public UpdateNetworkApplianceTrafficShapingRequest withPathParams(UpdateNetworkApplianceTrafficShapingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceTrafficShapingRequestBody request;
    public UpdateNetworkApplianceTrafficShapingRequest withRequest(UpdateNetworkApplianceTrafficShapingRequestBody request) {
        this.request = request;
        return this;
    }
}