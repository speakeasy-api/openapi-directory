package openapisdk.models.operations;



public class YoutubeSuperChatEventsListRequest {
    public YoutubeSuperChatEventsListQueryParams queryParams;
    public YoutubeSuperChatEventsListRequest withQueryParams(YoutubeSuperChatEventsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeSuperChatEventsListSecurity security;
    public YoutubeSuperChatEventsListRequest withSecurity(YoutubeSuperChatEventsListSecurity security) {
        this.security = security;
        return this;
    }
}