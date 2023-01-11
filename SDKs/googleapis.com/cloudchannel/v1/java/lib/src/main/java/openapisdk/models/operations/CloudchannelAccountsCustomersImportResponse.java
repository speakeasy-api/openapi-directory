package openapisdk.models.operations;



public class CloudchannelAccountsCustomersImportResponse {
    public String contentType;
    public CloudchannelAccountsCustomersImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1Customer googleCloudChannelV1Customer;
    public CloudchannelAccountsCustomersImportResponse withGoogleCloudChannelV1Customer(openapisdk.models.shared.GoogleCloudChannelV1Customer googleCloudChannelV1Customer) {
        this.googleCloudChannelV1Customer = googleCloudChannelV1Customer;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}