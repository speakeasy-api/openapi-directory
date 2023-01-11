package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsCreateRequest {
    public CloudchannelAccountsCustomersEntitlementsCreatePathParams pathParams;
    public CloudchannelAccountsCustomersEntitlementsCreateRequest withPathParams(CloudchannelAccountsCustomersEntitlementsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsCreateQueryParams queryParams;
    public CloudchannelAccountsCustomersEntitlementsCreateRequest withQueryParams(CloudchannelAccountsCustomersEntitlementsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1CreateEntitlementRequestInput request;
    public CloudchannelAccountsCustomersEntitlementsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1CreateEntitlementRequestInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsCreateSecurity security;
    public CloudchannelAccountsCustomersEntitlementsCreateRequest withSecurity(CloudchannelAccountsCustomersEntitlementsCreateSecurity security) {
        this.security = security;
        return this;
    }
}