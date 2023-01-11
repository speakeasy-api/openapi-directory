package openapisdk.models.operations;



public class CreateAlphaSenderResponse {
    public String contentType;
    public CreateAlphaSenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAlphaSenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServiceAlphaSender messagingV1ServiceAlphaSender;
    public CreateAlphaSenderResponse withMessagingV1ServiceAlphaSender(openapisdk.models.shared.MessagingV1ServiceAlphaSender messagingV1ServiceAlphaSender) {
        this.messagingV1ServiceAlphaSender = messagingV1ServiceAlphaSender;
        return this;
    }
}