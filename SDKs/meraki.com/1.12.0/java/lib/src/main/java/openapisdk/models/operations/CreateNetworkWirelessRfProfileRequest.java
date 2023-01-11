package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkWirelessRfProfileRequest {
    public CreateNetworkWirelessRfProfilePathParams pathParams;
    public CreateNetworkWirelessRfProfileRequest withPathParams(CreateNetworkWirelessRfProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkWirelessRfProfileRequestBody request;
    public CreateNetworkWirelessRfProfileRequest withRequest(CreateNetworkWirelessRfProfileRequestBody request) {
        this.request = request;
        return this;
    }
}