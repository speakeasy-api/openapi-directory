package openapisdk.models.operations;



public class FetchUserChannelResponse {
    public String contentType;
    public FetchUserChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceUserUserChannel chatV2ServiceUserUserChannel;
    public FetchUserChannelResponse withChatV2ServiceUserUserChannel(openapisdk.models.shared.ChatV2ServiceUserUserChannel chatV2ServiceUserUserChannel) {
        this.chatV2ServiceUserUserChannel = chatV2ServiceUserUserChannel;
        return this;
    }
}