package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapUpdateIapSettingsRequest {
    public IapUpdateIapSettingsPathParams pathParams;
    public IapUpdateIapSettingsRequest withPathParams(IapUpdateIapSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapUpdateIapSettingsQueryParams queryParams;
    public IapUpdateIapSettingsRequest withQueryParams(IapUpdateIapSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IapSettings request;
    public IapUpdateIapSettingsRequest withRequest(openapisdk.models.shared.IapSettings request) {
        this.request = request;
        return this;
    }
    public IapUpdateIapSettingsSecurity security;
    public IapUpdateIapSettingsRequest withSecurity(IapUpdateIapSettingsSecurity security) {
        this.security = security;
        return this;
    }
}