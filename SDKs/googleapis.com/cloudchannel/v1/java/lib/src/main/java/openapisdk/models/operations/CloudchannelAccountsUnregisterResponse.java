package openapisdk.models.operations;



public class CloudchannelAccountsUnregisterResponse {
    public String contentType;
    public CloudchannelAccountsUnregisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1UnregisterSubscriberResponse googleCloudChannelV1UnregisterSubscriberResponse;
    public CloudchannelAccountsUnregisterResponse withGoogleCloudChannelV1UnregisterSubscriberResponse(openapisdk.models.shared.GoogleCloudChannelV1UnregisterSubscriberResponse googleCloudChannelV1UnregisterSubscriberResponse) {
        this.googleCloudChannelV1UnregisterSubscriberResponse = googleCloudChannelV1UnregisterSubscriberResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsUnregisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}