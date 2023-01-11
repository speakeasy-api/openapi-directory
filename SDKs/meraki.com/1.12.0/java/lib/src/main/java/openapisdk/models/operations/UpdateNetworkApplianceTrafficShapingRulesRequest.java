package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingRulesRequest {
    public UpdateNetworkApplianceTrafficShapingRulesPathParams pathParams;
    public UpdateNetworkApplianceTrafficShapingRulesRequest withPathParams(UpdateNetworkApplianceTrafficShapingRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceTrafficShapingRulesRequestBody request;
    public UpdateNetworkApplianceTrafficShapingRulesRequest withRequest(UpdateNetworkApplianceTrafficShapingRulesRequestBody request) {
        this.request = request;
        return this;
    }
}