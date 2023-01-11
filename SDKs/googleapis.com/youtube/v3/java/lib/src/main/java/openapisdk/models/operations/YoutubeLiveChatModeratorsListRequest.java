package openapisdk.models.operations;



public class YoutubeLiveChatModeratorsListRequest {
    public YoutubeLiveChatModeratorsListQueryParams queryParams;
    public YoutubeLiveChatModeratorsListRequest withQueryParams(YoutubeLiveChatModeratorsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeLiveChatModeratorsListSecurity security;
    public YoutubeLiveChatModeratorsListRequest withSecurity(YoutubeLiveChatModeratorsListSecurity security) {
        this.security = security;
        return this;
    }
}