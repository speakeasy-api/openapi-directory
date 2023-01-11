package openapisdk.models.operations;



public class MessagesFetchAllResponse {
    public String contentType;
    public MessagesFetchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessagesResponse messagesResponse;
    public MessagesFetchAllResponse withMessagesResponse(openapisdk.models.shared.MessagesResponse messagesResponse) {
        this.messagesResponse = messagesResponse;
        return this;
    }
    public Long statusCode;
    public MessagesFetchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}