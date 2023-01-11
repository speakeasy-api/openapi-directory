package openapisdk.models.operations;



public class YoutubeLiveChatModeratorsInsertResponse {
    public String contentType;
    public YoutubeLiveChatModeratorsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveChatModerator liveChatModerator;
    public YoutubeLiveChatModeratorsInsertResponse withLiveChatModerator(openapisdk.models.shared.LiveChatModerator liveChatModerator) {
        this.liveChatModerator = liveChatModerator;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveChatModeratorsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}