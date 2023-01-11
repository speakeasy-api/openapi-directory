package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidIdentityPskRequest {
    public UpdateNetworkWirelessSsidIdentityPskPathParams pathParams;
    public UpdateNetworkWirelessSsidIdentityPskRequest withPathParams(UpdateNetworkWirelessSsidIdentityPskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidIdentityPskRequestBody request;
    public UpdateNetworkWirelessSsidIdentityPskRequest withRequest(UpdateNetworkWirelessSsidIdentityPskRequestBody request) {
        this.request = request;
        return this;
    }
}