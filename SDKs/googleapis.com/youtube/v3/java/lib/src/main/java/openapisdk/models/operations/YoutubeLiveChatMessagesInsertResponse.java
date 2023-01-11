package openapisdk.models.operations;



public class YoutubeLiveChatMessagesInsertResponse {
    public String contentType;
    public YoutubeLiveChatMessagesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveChatMessage liveChatMessage;
    public YoutubeLiveChatMessagesInsertResponse withLiveChatMessage(openapisdk.models.shared.LiveChatMessage liveChatMessage) {
        this.liveChatMessage = liveChatMessage;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveChatMessagesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}