package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidTrafficShapingRulesRequest {
    public UpdateNetworkWirelessSsidTrafficShapingRulesPathParams pathParams;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequest withPathParams(UpdateNetworkWirelessSsidTrafficShapingRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody request;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequest withRequest(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody request) {
        this.request = request;
        return this;
    }
}