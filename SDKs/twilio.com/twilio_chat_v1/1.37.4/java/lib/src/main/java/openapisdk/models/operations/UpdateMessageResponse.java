package openapisdk.models.operations;



public class UpdateMessageResponse {
    public String contentType;
    public UpdateMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceChannelMessage chatV1ServiceChannelMessage;
    public UpdateMessageResponse withChatV1ServiceChannelMessage(openapisdk.models.shared.ChatV1ServiceChannelMessage chatV1ServiceChannelMessage) {
        this.chatV1ServiceChannelMessage = chatV1ServiceChannelMessage;
        return this;
    }
}