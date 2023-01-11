package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidSplashSettingsRequest {
    public UpdateNetworkWirelessSsidSplashSettingsPathParams pathParams;
    public UpdateNetworkWirelessSsidSplashSettingsRequest withPathParams(UpdateNetworkWirelessSsidSplashSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody request;
    public UpdateNetworkWirelessSsidSplashSettingsRequest withRequest(UpdateNetworkWirelessSsidSplashSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}