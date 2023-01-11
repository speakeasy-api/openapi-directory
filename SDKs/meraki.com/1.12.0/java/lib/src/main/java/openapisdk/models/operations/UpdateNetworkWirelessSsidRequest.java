package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidRequest {
    public UpdateNetworkWirelessSsidPathParams pathParams;
    public UpdateNetworkWirelessSsidRequest withPathParams(UpdateNetworkWirelessSsidPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidRequestBody request;
    public UpdateNetworkWirelessSsidRequest withRequest(UpdateNetworkWirelessSsidRequestBody request) {
        this.request = request;
        return this;
    }
}