package openapisdk.models.operations;



public class CreateShortCodeResponse {
    public String contentType;
    public CreateShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServiceShortCode messagingV1ServiceShortCode;
    public CreateShortCodeResponse withMessagingV1ServiceShortCode(openapisdk.models.shared.MessagingV1ServiceShortCode messagingV1ServiceShortCode) {
        this.messagingV1ServiceShortCode = messagingV1ServiceShortCode;
        return this;
    }
}