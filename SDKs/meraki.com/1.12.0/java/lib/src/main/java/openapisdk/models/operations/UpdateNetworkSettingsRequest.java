package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSettingsRequest {
    public UpdateNetworkSettingsPathParams pathParams;
    public UpdateNetworkSettingsRequest withPathParams(UpdateNetworkSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSettingsRequestBody request;
    public UpdateNetworkSettingsRequest withRequest(UpdateNetworkSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}