package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSettingsRequest {
    public UpdateNetworkWirelessSettingsPathParams pathParams;
    public UpdateNetworkWirelessSettingsRequest withPathParams(UpdateNetworkWirelessSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSettingsRequestBody request;
    public UpdateNetworkWirelessSettingsRequest withRequest(UpdateNetworkWirelessSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}