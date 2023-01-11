package openapisdk.models.operations;



public class CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse {
    public String contentType;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1CustomerRepricingConfig googleCloudChannelV1CustomerRepricingConfig;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse withGoogleCloudChannelV1CustomerRepricingConfig(openapisdk.models.shared.GoogleCloudChannelV1CustomerRepricingConfig googleCloudChannelV1CustomerRepricingConfig) {
        this.googleCloudChannelV1CustomerRepricingConfig = googleCloudChannelV1CustomerRepricingConfig;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}