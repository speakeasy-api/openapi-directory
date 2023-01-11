package openapisdk.models.operations;



public class PostCommunicationPreferencesV3SubscribeSubscribeResponse {
    public byte[] body;
    public PostCommunicationPreferencesV3SubscribeSubscribeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCommunicationPreferencesV3SubscribeSubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicSubscriptionStatus publicSubscriptionStatus;
    public PostCommunicationPreferencesV3SubscribeSubscribeResponse withPublicSubscriptionStatus(openapisdk.models.shared.PublicSubscriptionStatus publicSubscriptionStatus) {
        this.publicSubscriptionStatus = publicSubscriptionStatus;
        return this;
    }
    public Long statusCode;
    public PostCommunicationPreferencesV3SubscribeSubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}