package openapisdk.models.operations;



public class UpdateUserChannelResponse {
    public String contentType;
    public UpdateUserChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceUserUserChannel chatV2ServiceUserUserChannel;
    public UpdateUserChannelResponse withChatV2ServiceUserUserChannel(openapisdk.models.shared.ChatV2ServiceUserUserChannel chatV2ServiceUserUserChannel) {
        this.chatV2ServiceUserUserChannel = chatV2ServiceUserUserChannel;
        return this;
    }
}