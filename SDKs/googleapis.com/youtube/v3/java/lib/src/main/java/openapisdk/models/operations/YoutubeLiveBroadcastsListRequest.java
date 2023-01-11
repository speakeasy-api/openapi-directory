package openapisdk.models.operations;



public class YoutubeLiveBroadcastsListRequest {
    public YoutubeLiveBroadcastsListQueryParams queryParams;
    public YoutubeLiveBroadcastsListRequest withQueryParams(YoutubeLiveBroadcastsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeLiveBroadcastsListSecurity security;
    public YoutubeLiveBroadcastsListRequest withSecurity(YoutubeLiveBroadcastsListSecurity security) {
        this.security = security;
        return this;
    }
}