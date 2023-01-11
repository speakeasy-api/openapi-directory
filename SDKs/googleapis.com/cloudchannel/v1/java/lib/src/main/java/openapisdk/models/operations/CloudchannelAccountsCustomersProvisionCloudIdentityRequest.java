package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersProvisionCloudIdentityRequest {
    public CloudchannelAccountsCustomersProvisionCloudIdentityPathParams pathParams;
    public CloudchannelAccountsCustomersProvisionCloudIdentityRequest withPathParams(CloudchannelAccountsCustomersProvisionCloudIdentityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersProvisionCloudIdentityQueryParams queryParams;
    public CloudchannelAccountsCustomersProvisionCloudIdentityRequest withQueryParams(CloudchannelAccountsCustomersProvisionCloudIdentityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ProvisionCloudIdentityRequestInput request;
    public CloudchannelAccountsCustomersProvisionCloudIdentityRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ProvisionCloudIdentityRequestInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersProvisionCloudIdentitySecurity security;
    public CloudchannelAccountsCustomersProvisionCloudIdentityRequest withSecurity(CloudchannelAccountsCustomersProvisionCloudIdentitySecurity security) {
        this.security = security;
        return this;
    }
}