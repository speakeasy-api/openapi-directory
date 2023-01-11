package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest {
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsPathParams pathParams;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest withPathParams(CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsQueryParams queryParams;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest withQueryParams(CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ChangeRenewalSettingsRequestInput request;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ChangeRenewalSettingsRequestInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity security;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest withSecurity(CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity security) {
        this.security = security;
        return this;
    }
}