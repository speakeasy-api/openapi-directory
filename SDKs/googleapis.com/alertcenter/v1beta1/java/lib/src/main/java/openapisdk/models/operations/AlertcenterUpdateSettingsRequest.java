package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterUpdateSettingsRequest {
    public AlertcenterUpdateSettingsQueryParams queryParams;
    public AlertcenterUpdateSettingsRequest withQueryParams(AlertcenterUpdateSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Settings request;
    public AlertcenterUpdateSettingsRequest withRequest(openapisdk.models.shared.Settings request) {
        this.request = request;
        return this;
    }
    public AlertcenterUpdateSettingsSecurity security;
    public AlertcenterUpdateSettingsRequest withSecurity(AlertcenterUpdateSettingsSecurity security) {
        this.security = security;
        return this;
    }
}