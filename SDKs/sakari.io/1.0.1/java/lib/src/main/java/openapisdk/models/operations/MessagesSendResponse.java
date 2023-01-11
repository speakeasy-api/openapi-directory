package openapisdk.models.operations;



public class MessagesSendResponse {
    public String contentType;
    public MessagesSendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SendMessagesResponse sendMessagesResponse;
    public MessagesSendResponse withSendMessagesResponse(openapisdk.models.shared.SendMessagesResponse sendMessagesResponse) {
        this.sendMessagesResponse = sendMessagesResponse;
        return this;
    }
    public Long statusCode;
    public MessagesSendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}