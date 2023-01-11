package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersCreateRequest {
    public CloudchannelAccountsCustomersCreatePathParams pathParams;
    public CloudchannelAccountsCustomersCreateRequest withPathParams(CloudchannelAccountsCustomersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersCreateQueryParams queryParams;
    public CloudchannelAccountsCustomersCreateRequest withQueryParams(CloudchannelAccountsCustomersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1CustomerInput request;
    public CloudchannelAccountsCustomersCreateRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1CustomerInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersCreateSecurity security;
    public CloudchannelAccountsCustomersCreateRequest withSecurity(CloudchannelAccountsCustomersCreateSecurity security) {
        this.security = security;
        return this;
    }
}