package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkAlertsSettingsRequest {
    public UpdateNetworkAlertsSettingsPathParams pathParams;
    public UpdateNetworkAlertsSettingsRequest withPathParams(UpdateNetworkAlertsSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkAlertsSettingsRequestBody request;
    public UpdateNetworkAlertsSettingsRequest withRequest(UpdateNetworkAlertsSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}