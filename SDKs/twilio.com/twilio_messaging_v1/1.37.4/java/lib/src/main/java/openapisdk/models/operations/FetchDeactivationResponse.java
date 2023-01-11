package openapisdk.models.operations;



public class FetchDeactivationResponse {
    public String contentType;
    public FetchDeactivationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeactivationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1Deactivation messagingV1Deactivation;
    public FetchDeactivationResponse withMessagingV1Deactivation(openapisdk.models.shared.MessagingV1Deactivation messagingV1Deactivation) {
        this.messagingV1Deactivation = messagingV1Deactivation;
        return this;
    }
}