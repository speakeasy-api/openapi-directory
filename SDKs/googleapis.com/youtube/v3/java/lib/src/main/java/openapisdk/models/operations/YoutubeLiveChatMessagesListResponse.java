package openapisdk.models.operations;



public class YoutubeLiveChatMessagesListResponse {
    public String contentType;
    public YoutubeLiveChatMessagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveChatMessageListResponse liveChatMessageListResponse;
    public YoutubeLiveChatMessagesListResponse withLiveChatMessageListResponse(openapisdk.models.shared.LiveChatMessageListResponse liveChatMessageListResponse) {
        this.liveChatMessageListResponse = liveChatMessageListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveChatMessagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}