package openapisdk.models.operations;



public class FetchAlphaSenderResponse {
    public String contentType;
    public FetchAlphaSenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAlphaSenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServiceAlphaSender messagingV1ServiceAlphaSender;
    public FetchAlphaSenderResponse withMessagingV1ServiceAlphaSender(openapisdk.models.shared.MessagingV1ServiceAlphaSender messagingV1ServiceAlphaSender) {
        this.messagingV1ServiceAlphaSender = messagingV1ServiceAlphaSender;
        return this;
    }
}