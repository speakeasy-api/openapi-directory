package openapisdk.models.operations;



public class FetchTollfreeVerificationResponse {
    public String contentType;
    public FetchTollfreeVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTollfreeVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1TollfreeVerification messagingV1TollfreeVerification;
    public FetchTollfreeVerificationResponse withMessagingV1TollfreeVerification(openapisdk.models.shared.MessagingV1TollfreeVerification messagingV1TollfreeVerification) {
        this.messagingV1TollfreeVerification = messagingV1TollfreeVerification;
        return this;
    }
}