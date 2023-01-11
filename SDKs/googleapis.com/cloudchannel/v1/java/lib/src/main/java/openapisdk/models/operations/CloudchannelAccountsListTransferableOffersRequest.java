package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsListTransferableOffersRequest {
    public CloudchannelAccountsListTransferableOffersPathParams pathParams;
    public CloudchannelAccountsListTransferableOffersRequest withPathParams(CloudchannelAccountsListTransferableOffersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsListTransferableOffersQueryParams queryParams;
    public CloudchannelAccountsListTransferableOffersRequest withQueryParams(CloudchannelAccountsListTransferableOffersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ListTransferableOffersRequest request;
    public CloudchannelAccountsListTransferableOffersRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ListTransferableOffersRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsListTransferableOffersSecurity security;
    public CloudchannelAccountsListTransferableOffersRequest withSecurity(CloudchannelAccountsListTransferableOffersSecurity security) {
        this.security = security;
        return this;
    }
}