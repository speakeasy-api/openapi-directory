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
    public openapisdk.models.shared.ChatV2ServiceChannelMessage chatV2ServiceChannelMessage;
    public CreateMessageResponse withChatV2ServiceChannelMessage(openapisdk.models.shared.ChatV2ServiceChannelMessage chatV2ServiceChannelMessage) {
        this.chatV2ServiceChannelMessage = chatV2ServiceChannelMessage;
        return this;
    }
}