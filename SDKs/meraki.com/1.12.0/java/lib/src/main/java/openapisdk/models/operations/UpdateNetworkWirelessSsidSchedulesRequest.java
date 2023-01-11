package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidSchedulesRequest {
    public UpdateNetworkWirelessSsidSchedulesPathParams pathParams;
    public UpdateNetworkWirelessSsidSchedulesRequest withPathParams(UpdateNetworkWirelessSsidSchedulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidSchedulesRequestBody request;
    public UpdateNetworkWirelessSsidSchedulesRequest withRequest(UpdateNetworkWirelessSsidSchedulesRequestBody request) {
        this.request = request;
        return this;
    }
}