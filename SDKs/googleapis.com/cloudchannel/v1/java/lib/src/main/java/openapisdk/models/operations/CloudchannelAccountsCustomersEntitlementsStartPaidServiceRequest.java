package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest {
    public CloudchannelAccountsCustomersEntitlementsStartPaidServicePathParams pathParams;
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest withPathParams(CloudchannelAccountsCustomersEntitlementsStartPaidServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceQueryParams queryParams;
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest withQueryParams(CloudchannelAccountsCustomersEntitlementsStartPaidServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1StartPaidServiceRequest request;
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1StartPaidServiceRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity security;
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest withSecurity(CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity security) {
        this.security = security;
        return this;
    }
}