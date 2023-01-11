package openapisdk.models.operations;



public class FetchChannelResponse {
    public String contentType;
    public FetchChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceChannel chatV2ServiceChannel;
    public FetchChannelResponse withChatV2ServiceChannel(openapisdk.models.shared.ChatV2ServiceChannel chatV2ServiceChannel) {
        this.chatV2ServiceChannel = chatV2ServiceChannel;
        return this;
    }
}