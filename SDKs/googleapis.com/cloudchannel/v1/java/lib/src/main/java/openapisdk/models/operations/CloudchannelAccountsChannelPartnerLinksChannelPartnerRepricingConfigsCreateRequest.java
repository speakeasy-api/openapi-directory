package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest {
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams pathParams;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest withPathParams(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams queryParams;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest withQueryParams(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput request;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity security;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest withSecurity(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}