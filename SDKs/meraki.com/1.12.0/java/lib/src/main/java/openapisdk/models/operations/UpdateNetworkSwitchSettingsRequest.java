package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchSettingsRequest {
    public UpdateNetworkSwitchSettingsPathParams pathParams;
    public UpdateNetworkSwitchSettingsRequest withPathParams(UpdateNetworkSwitchSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchSettingsRequestBody request;
    public UpdateNetworkSwitchSettingsRequest withRequest(UpdateNetworkSwitchSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}