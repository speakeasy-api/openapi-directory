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
    public openapisdk.models.shared.ChatV1ServiceChannelMessage chatV1ServiceChannelMessage;
    public FetchMessageResponse withChatV1ServiceChannelMessage(openapisdk.models.shared.ChatV1ServiceChannelMessage chatV1ServiceChannelMessage) {
        this.chatV1ServiceChannelMessage = chatV1ServiceChannelMessage;
        return this;
    }
}