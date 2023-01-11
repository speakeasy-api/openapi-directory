package openapisdk.models.operations;



public class CreateChannelResponse {
    public String contentType;
    public CreateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceChannel chatV1ServiceChannel;
    public CreateChannelResponse withChatV1ServiceChannel(openapisdk.models.shared.ChatV1ServiceChannel chatV1ServiceChannel) {
        this.chatV1ServiceChannel = chatV1ServiceChannel;
        return this;
    }
}