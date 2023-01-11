package openapisdk.models.operations;



public class CreateTollfreeVerificationResponse {
    public String contentType;
    public CreateTollfreeVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTollfreeVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1TollfreeVerification messagingV1TollfreeVerification;
    public CreateTollfreeVerificationResponse withMessagingV1TollfreeVerification(openapisdk.models.shared.MessagingV1TollfreeVerification messagingV1TollfreeVerification) {
        this.messagingV1TollfreeVerification = messagingV1TollfreeVerification;
        return this;
    }
}