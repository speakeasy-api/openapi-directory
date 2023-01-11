package openapisdk.models.operations;



public class PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse {
    public byte[] body;
    public PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicSubscriptionStatus publicSubscriptionStatus;
    public PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse withPublicSubscriptionStatus(openapisdk.models.shared.PublicSubscriptionStatus publicSubscriptionStatus) {
        this.publicSubscriptionStatus = publicSubscriptionStatus;
        return this;
    }
    public Long statusCode;
    public PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}