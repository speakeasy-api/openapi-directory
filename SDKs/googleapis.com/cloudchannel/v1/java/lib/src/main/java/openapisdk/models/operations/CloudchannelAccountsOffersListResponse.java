package openapisdk.models.operations;



public class CloudchannelAccountsOffersListResponse {
    public String contentType;
    public CloudchannelAccountsOffersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListOffersResponse googleCloudChannelV1ListOffersResponse;
    public CloudchannelAccountsOffersListResponse withGoogleCloudChannelV1ListOffersResponse(openapisdk.models.shared.GoogleCloudChannelV1ListOffersResponse googleCloudChannelV1ListOffersResponse) {
        this.googleCloudChannelV1ListOffersResponse = googleCloudChannelV1ListOffersResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsOffersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}