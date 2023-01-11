package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest {
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams pathParams;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest withPathParams(CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams queryParams;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest withQueryParams(CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1CustomerRepricingConfigInput request;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1CustomerRepricingConfigInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity security;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest withSecurity(CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}