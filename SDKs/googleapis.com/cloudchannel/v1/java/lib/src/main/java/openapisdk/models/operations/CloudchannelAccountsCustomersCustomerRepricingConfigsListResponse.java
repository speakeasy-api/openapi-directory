package openapisdk.models.operations;



public class CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse {
    public String contentType;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListCustomerRepricingConfigsResponse googleCloudChannelV1ListCustomerRepricingConfigsResponse;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse withGoogleCloudChannelV1ListCustomerRepricingConfigsResponse(openapisdk.models.shared.GoogleCloudChannelV1ListCustomerRepricingConfigsResponse googleCloudChannelV1ListCustomerRepricingConfigsResponse) {
        this.googleCloudChannelV1ListCustomerRepricingConfigsResponse = googleCloudChannelV1ListCustomerRepricingConfigsResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}