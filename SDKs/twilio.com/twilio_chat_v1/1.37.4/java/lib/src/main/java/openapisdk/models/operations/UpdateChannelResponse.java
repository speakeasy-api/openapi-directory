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
    public openapisdk.models.shared.ChatV1ServiceChannel chatV1ServiceChannel;
    public UpdateChannelResponse withChatV1ServiceChannel(openapisdk.models.shared.ChatV1ServiceChannel chatV1ServiceChannel) {
        this.chatV1ServiceChannel = chatV1ServiceChannel;
        return this;
    }
}