package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersImportRequest {
    public CloudchannelAccountsCustomersImportPathParams pathParams;
    public CloudchannelAccountsCustomersImportRequest withPathParams(CloudchannelAccountsCustomersImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersImportQueryParams queryParams;
    public CloudchannelAccountsCustomersImportRequest withQueryParams(CloudchannelAccountsCustomersImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ImportCustomerRequest request;
    public CloudchannelAccountsCustomersImportRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ImportCustomerRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersImportSecurity security;
    public CloudchannelAccountsCustomersImportRequest withSecurity(CloudchannelAccountsCustomersImportSecurity security) {
        this.security = security;
        return this;
    }
}