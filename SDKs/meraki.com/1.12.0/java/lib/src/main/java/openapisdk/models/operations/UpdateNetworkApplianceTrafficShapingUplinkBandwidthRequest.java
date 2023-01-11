package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest {
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams pathParams;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest withPathParams(UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody request;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest withRequest(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody request) {
        this.request = request;
        return this;
    }
}