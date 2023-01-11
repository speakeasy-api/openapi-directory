package openapisdk.models.operations;



public class CloudchannelAccountsRegisterResponse {
    public String contentType;
    public CloudchannelAccountsRegisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1RegisterSubscriberResponse googleCloudChannelV1RegisterSubscriberResponse;
    public CloudchannelAccountsRegisterResponse withGoogleCloudChannelV1RegisterSubscriberResponse(openapisdk.models.shared.GoogleCloudChannelV1RegisterSubscriberResponse googleCloudChannelV1RegisterSubscriberResponse) {
        this.googleCloudChannelV1RegisterSubscriberResponse = googleCloudChannelV1RegisterSubscriberResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsRegisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}