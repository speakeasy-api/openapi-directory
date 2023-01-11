package openapisdk.models.operations;



public class FetchShortCodeResponse {
    public String contentType;
    public FetchShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServiceShortCode messagingV1ServiceShortCode;
    public FetchShortCodeResponse withMessagingV1ServiceShortCode(openapisdk.models.shared.MessagingV1ServiceShortCode messagingV1ServiceShortCode) {
        this.messagingV1ServiceShortCode = messagingV1ServiceShortCode;
        return this;
    }
}