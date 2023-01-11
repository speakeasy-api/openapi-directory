package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidEapOverrideRequest {
    public UpdateNetworkWirelessSsidEapOverridePathParams pathParams;
    public UpdateNetworkWirelessSsidEapOverrideRequest withPathParams(UpdateNetworkWirelessSsidEapOverridePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidEapOverrideRequestBody request;
    public UpdateNetworkWirelessSsidEapOverrideRequest withRequest(UpdateNetworkWirelessSsidEapOverrideRequestBody request) {
        this.request = request;
        return this;
    }
}