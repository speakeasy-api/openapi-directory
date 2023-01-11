package openapisdk.models.operations;



public class CloudchannelAccountsCustomersCreateResponse {
    public String contentType;
    public CloudchannelAccountsCustomersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1Customer googleCloudChannelV1Customer;
    public CloudchannelAccountsCustomersCreateResponse withGoogleCloudChannelV1Customer(openapisdk.models.shared.GoogleCloudChannelV1Customer googleCloudChannelV1Customer) {
        this.googleCloudChannelV1Customer = googleCloudChannelV1Customer;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}