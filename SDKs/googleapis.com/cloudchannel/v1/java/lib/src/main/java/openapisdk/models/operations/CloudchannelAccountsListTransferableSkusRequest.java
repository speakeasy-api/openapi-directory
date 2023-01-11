package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsListTransferableSkusRequest {
    public CloudchannelAccountsListTransferableSkusPathParams pathParams;
    public CloudchannelAccountsListTransferableSkusRequest withPathParams(CloudchannelAccountsListTransferableSkusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsListTransferableSkusQueryParams queryParams;
    public CloudchannelAccountsListTransferableSkusRequest withQueryParams(CloudchannelAccountsListTransferableSkusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ListTransferableSkusRequest request;
    public CloudchannelAccountsListTransferableSkusRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ListTransferableSkusRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsListTransferableSkusSecurity security;
    public CloudchannelAccountsListTransferableSkusRequest withSecurity(CloudchannelAccountsListTransferableSkusSecurity security) {
        this.security = security;
        return this;
    }
}