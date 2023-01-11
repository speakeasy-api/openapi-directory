package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceVlansSettingsRequest {
    public UpdateNetworkApplianceVlansSettingsPathParams pathParams;
    public UpdateNetworkApplianceVlansSettingsRequest withPathParams(UpdateNetworkApplianceVlansSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceVlansSettingsRequestBody request;
    public UpdateNetworkApplianceVlansSettingsRequest withRequest(UpdateNetworkApplianceVlansSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}