package openapisdk.models.operations;



public class CloudchannelAccountsListSubscribersResponse {
    public String contentType;
    public CloudchannelAccountsListSubscribersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListSubscribersResponse googleCloudChannelV1ListSubscribersResponse;
    public CloudchannelAccountsListSubscribersResponse withGoogleCloudChannelV1ListSubscribersResponse(openapisdk.models.shared.GoogleCloudChannelV1ListSubscribersResponse googleCloudChannelV1ListSubscribersResponse) {
        this.googleCloudChannelV1ListSubscribersResponse = googleCloudChannelV1ListSubscribersResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsListSubscribersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}