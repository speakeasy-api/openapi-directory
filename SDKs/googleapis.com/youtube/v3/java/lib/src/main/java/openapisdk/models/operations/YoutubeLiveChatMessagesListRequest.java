package openapisdk.models.operations;



public class YoutubeLiveChatMessagesListRequest {
    public YoutubeLiveChatMessagesListQueryParams queryParams;
    public YoutubeLiveChatMessagesListRequest withQueryParams(YoutubeLiveChatMessagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeLiveChatMessagesListSecurity security;
    public YoutubeLiveChatMessagesListRequest withSecurity(YoutubeLiveChatMessagesListSecurity security) {
        this.security = security;
        return this;
    }
}