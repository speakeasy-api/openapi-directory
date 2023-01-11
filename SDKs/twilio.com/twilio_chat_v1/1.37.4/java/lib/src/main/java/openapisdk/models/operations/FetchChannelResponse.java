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
    public openapisdk.models.shared.ChatV1ServiceChannel chatV1ServiceChannel;
    public FetchChannelResponse withChatV1ServiceChannel(openapisdk.models.shared.ChatV1ServiceChannel chatV1ServiceChannel) {
        this.chatV1ServiceChannel = chatV1ServiceChannel;
        return this;
    }
}