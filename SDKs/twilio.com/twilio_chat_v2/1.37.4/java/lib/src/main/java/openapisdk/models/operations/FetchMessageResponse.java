package openapisdk.models.operations;



public class FetchMessageResponse {
    public String contentType;
    public FetchMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceChannelMessage chatV2ServiceChannelMessage;
    public FetchMessageResponse withChatV2ServiceChannelMessage(openapisdk.models.shared.ChatV2ServiceChannelMessage chatV2ServiceChannelMessage) {
        this.chatV2ServiceChannelMessage = chatV2ServiceChannelMessage;
        return this;
    }
}