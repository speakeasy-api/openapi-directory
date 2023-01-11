package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsActivateRequest {
    public CloudchannelAccountsCustomersEntitlementsActivatePathParams pathParams;
    public CloudchannelAccountsCustomersEntitlementsActivateRequest withPathParams(CloudchannelAccountsCustomersEntitlementsActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsActivateQueryParams queryParams;
    public CloudchannelAccountsCustomersEntitlementsActivateRequest withQueryParams(CloudchannelAccountsCustomersEntitlementsActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ActivateEntitlementRequest request;
    public CloudchannelAccountsCustomersEntitlementsActivateRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ActivateEntitlementRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsActivateSecurity security;
    public CloudchannelAccountsCustomersEntitlementsActivateRequest withSecurity(CloudchannelAccountsCustomersEntitlementsActivateSecurity security) {
        this.security = security;
        return this;
    }
}