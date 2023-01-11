package openapisdk.models.operations;



public class CreateMessageResponse {
    public String contentType;
    public CreateMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceChannelMessage chatV1ServiceChannelMessage;
    public CreateMessageResponse withChatV1ServiceChannelMessage(openapisdk.models.shared.ChatV1ServiceChannelMessage chatV1ServiceChannelMessage) {
        this.chatV1ServiceChannelMessage = chatV1ServiceChannelMessage;
        return this;
    }
}