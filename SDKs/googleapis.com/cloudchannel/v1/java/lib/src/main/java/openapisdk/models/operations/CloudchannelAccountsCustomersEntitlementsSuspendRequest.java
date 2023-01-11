package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsSuspendRequest {
    public CloudchannelAccountsCustomersEntitlementsSuspendPathParams pathParams;
    public CloudchannelAccountsCustomersEntitlementsSuspendRequest withPathParams(CloudchannelAccountsCustomersEntitlementsSuspendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsSuspendQueryParams queryParams;
    public CloudchannelAccountsCustomersEntitlementsSuspendRequest withQueryParams(CloudchannelAccountsCustomersEntitlementsSuspendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1SuspendEntitlementRequest request;
    public CloudchannelAccountsCustomersEntitlementsSuspendRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1SuspendEntitlementRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsSuspendSecurity security;
    public CloudchannelAccountsCustomersEntitlementsSuspendRequest withSecurity(CloudchannelAccountsCustomersEntitlementsSuspendSecurity security) {
        this.security = security;
        return this;
    }
}