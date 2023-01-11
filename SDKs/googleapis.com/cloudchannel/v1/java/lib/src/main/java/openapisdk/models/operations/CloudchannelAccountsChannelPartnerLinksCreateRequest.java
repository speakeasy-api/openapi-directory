package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsChannelPartnerLinksCreateRequest {
    public CloudchannelAccountsChannelPartnerLinksCreatePathParams pathParams;
    public CloudchannelAccountsChannelPartnerLinksCreateRequest withPathParams(CloudchannelAccountsChannelPartnerLinksCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsChannelPartnerLinksCreateQueryParams queryParams;
    public CloudchannelAccountsChannelPartnerLinksCreateRequest withQueryParams(CloudchannelAccountsChannelPartnerLinksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerLinkInput request;
    public CloudchannelAccountsChannelPartnerLinksCreateRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerLinkInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsChannelPartnerLinksCreateSecurity security;
    public CloudchannelAccountsChannelPartnerLinksCreateRequest withSecurity(CloudchannelAccountsChannelPartnerLinksCreateSecurity security) {
        this.security = security;
        return this;
    }
}