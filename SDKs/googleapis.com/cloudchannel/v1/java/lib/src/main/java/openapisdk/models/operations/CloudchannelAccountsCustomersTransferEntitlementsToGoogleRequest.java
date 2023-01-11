package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest {
    public CloudchannelAccountsCustomersTransferEntitlementsToGooglePathParams pathParams;
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest withPathParams(CloudchannelAccountsCustomersTransferEntitlementsToGooglePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleQueryParams queryParams;
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest withQueryParams(CloudchannelAccountsCustomersTransferEntitlementsToGoogleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput request;
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity security;
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest withSecurity(CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity security) {
        this.security = security;
        return this;
    }
}