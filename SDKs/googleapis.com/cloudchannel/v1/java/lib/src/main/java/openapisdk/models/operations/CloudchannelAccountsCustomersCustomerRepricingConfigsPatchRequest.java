package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest {
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams pathParams;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest withPathParams(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams queryParams;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest withQueryParams(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1CustomerRepricingConfigInput request;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1CustomerRepricingConfigInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity security;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest withSecurity(CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity security) {
        this.security = security;
        return this;
    }
}