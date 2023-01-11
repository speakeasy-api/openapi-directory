package openapisdk.models.operations;



public class CloudchannelAccountsCustomersListResponse {
    public String contentType;
    public CloudchannelAccountsCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListCustomersResponse googleCloudChannelV1ListCustomersResponse;
    public CloudchannelAccountsCustomersListResponse withGoogleCloudChannelV1ListCustomersResponse(openapisdk.models.shared.GoogleCloudChannelV1ListCustomersResponse googleCloudChannelV1ListCustomersResponse) {
        this.googleCloudChannelV1ListCustomersResponse = googleCloudChannelV1ListCustomersResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}