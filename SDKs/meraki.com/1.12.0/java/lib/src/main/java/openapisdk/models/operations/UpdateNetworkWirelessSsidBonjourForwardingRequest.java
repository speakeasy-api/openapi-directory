package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidBonjourForwardingRequest {
    public UpdateNetworkWirelessSsidBonjourForwardingPathParams pathParams;
    public UpdateNetworkWirelessSsidBonjourForwardingRequest withPathParams(UpdateNetworkWirelessSsidBonjourForwardingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBody request;
    public UpdateNetworkWirelessSsidBonjourForwardingRequest withRequest(UpdateNetworkWirelessSsidBonjourForwardingRequestBody request) {
        this.request = request;
        return this;
    }
}