package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessRfProfileRequest {
    public UpdateNetworkWirelessRfProfilePathParams pathParams;
    public UpdateNetworkWirelessRfProfileRequest withPathParams(UpdateNetworkWirelessRfProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessRfProfileRequestBody request;
    public UpdateNetworkWirelessRfProfileRequest withRequest(UpdateNetworkWirelessRfProfileRequestBody request) {
        this.request = request;
        return this;
    }
}