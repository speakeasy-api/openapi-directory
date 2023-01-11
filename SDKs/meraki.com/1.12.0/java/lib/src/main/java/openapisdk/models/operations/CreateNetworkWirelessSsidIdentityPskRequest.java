package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkWirelessSsidIdentityPskRequest {
    public CreateNetworkWirelessSsidIdentityPskPathParams pathParams;
    public CreateNetworkWirelessSsidIdentityPskRequest withPathParams(CreateNetworkWirelessSsidIdentityPskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkWirelessSsidIdentityPskRequestBody request;
    public CreateNetworkWirelessSsidIdentityPskRequest withRequest(CreateNetworkWirelessSsidIdentityPskRequestBody request) {
        this.request = request;
        return this;
    }
}