package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersTransferEntitlementsRequest {
    public CloudchannelAccountsCustomersTransferEntitlementsPathParams pathParams;
    public CloudchannelAccountsCustomersTransferEntitlementsRequest withPathParams(CloudchannelAccountsCustomersTransferEntitlementsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersTransferEntitlementsQueryParams queryParams;
    public CloudchannelAccountsCustomersTransferEntitlementsRequest withQueryParams(CloudchannelAccountsCustomersTransferEntitlementsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1TransferEntitlementsRequestInput request;
    public CloudchannelAccountsCustomersTransferEntitlementsRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1TransferEntitlementsRequestInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersTransferEntitlementsSecurity security;
    public CloudchannelAccountsCustomersTransferEntitlementsRequest withSecurity(CloudchannelAccountsCustomersTransferEntitlementsSecurity security) {
        this.security = security;
        return this;
    }
}