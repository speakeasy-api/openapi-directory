package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCheckCloudIdentityAccountsExistRequest {
    public CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams pathParams;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistRequest withPathParams(CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams queryParams;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistRequest withQueryParams(CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest request;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity security;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistRequest withSecurity(CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity security) {
        this.security = security;
        return this;
    }
}