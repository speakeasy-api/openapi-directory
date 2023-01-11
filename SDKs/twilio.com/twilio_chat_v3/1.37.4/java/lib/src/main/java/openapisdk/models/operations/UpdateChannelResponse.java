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
    public openapisdk.models.shared.ChatV3Channel chatV3Channel;
    public UpdateChannelResponse withChatV3Channel(openapisdk.models.shared.ChatV3Channel chatV3Channel) {
        this.chatV3Channel = chatV3Channel;
        return this;
    }
}