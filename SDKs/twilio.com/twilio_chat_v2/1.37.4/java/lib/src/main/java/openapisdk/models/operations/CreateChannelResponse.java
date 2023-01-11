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
    public openapisdk.models.shared.ChatV2ServiceChannel chatV2ServiceChannel;
    public CreateChannelResponse withChatV2ServiceChannel(openapisdk.models.shared.ChatV2ServiceChannel chatV2ServiceChannel) {
        this.chatV2ServiceChannel = chatV2ServiceChannel;
        return this;
    }
}