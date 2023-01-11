package openapisdk.models.operations;



public class UpdateChannelResponse {
    public String contentType;
    public UpdateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceChannel chatV2ServiceChannel;
    public UpdateChannelResponse withChatV2ServiceChannel(openapisdk.models.shared.ChatV2ServiceChannel chatV2ServiceChannel) {
        this.chatV2ServiceChannel = chatV2ServiceChannel;
        return this;
    }
}