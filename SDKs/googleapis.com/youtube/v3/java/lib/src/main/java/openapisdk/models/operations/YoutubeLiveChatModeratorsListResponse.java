package openapisdk.models.operations;



public class YoutubeLiveChatModeratorsListResponse {
    public String contentType;
    public YoutubeLiveChatModeratorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveChatModeratorListResponse liveChatModeratorListResponse;
    public YoutubeLiveChatModeratorsListResponse withLiveChatModeratorListResponse(openapisdk.models.shared.LiveChatModeratorListResponse liveChatModeratorListResponse) {
        this.liveChatModeratorListResponse = liveChatModeratorListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveChatModeratorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}