package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsChangeRenewalSettingsRequest {
    public ResellerSubscriptionsChangeRenewalSettingsPathParams pathParams;
    public ResellerSubscriptionsChangeRenewalSettingsRequest withPathParams(ResellerSubscriptionsChangeRenewalSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerSubscriptionsChangeRenewalSettingsQueryParams queryParams;
    public ResellerSubscriptionsChangeRenewalSettingsRequest withQueryParams(ResellerSubscriptionsChangeRenewalSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RenewalSettings request;
    public ResellerSubscriptionsChangeRenewalSettingsRequest withRequest(openapisdk.models.shared.RenewalSettings request) {
        this.request = request;
        return this;
    }
    public ResellerSubscriptionsChangeRenewalSettingsSecurity security;
    public ResellerSubscriptionsChangeRenewalSettingsRequest withSecurity(ResellerSubscriptionsChangeRenewalSettingsSecurity security) {
        this.security = security;
        return this;
    }
}