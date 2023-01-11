package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsChangeOfferRequest {
    public CloudchannelAccountsCustomersEntitlementsChangeOfferPathParams pathParams;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferRequest withPathParams(CloudchannelAccountsCustomersEntitlementsChangeOfferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsChangeOfferQueryParams queryParams;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferRequest withQueryParams(CloudchannelAccountsCustomersEntitlementsChangeOfferQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ChangeOfferRequestInput request;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ChangeOfferRequestInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity security;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferRequest withSecurity(CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity security) {
        this.security = security;
        return this;
    }
}