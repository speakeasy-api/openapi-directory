package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest {
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams pathParams;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest withPathParams(UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody request;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest withRequest(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody request) {
        this.request = request;
        return this;
    }
}