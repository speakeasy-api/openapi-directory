package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessBillingRequest {
    public UpdateNetworkWirelessBillingPathParams pathParams;
    public UpdateNetworkWirelessBillingRequest withPathParams(UpdateNetworkWirelessBillingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessBillingRequestBody request;
    public UpdateNetworkWirelessBillingRequest withRequest(UpdateNetworkWirelessBillingRequestBody request) {
        this.request = request;
        return this;
    }
}