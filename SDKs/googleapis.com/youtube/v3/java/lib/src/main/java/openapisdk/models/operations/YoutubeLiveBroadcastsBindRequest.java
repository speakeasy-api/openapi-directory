package openapisdk.models.operations;



public class YoutubeLiveBroadcastsBindRequest {
    public YoutubeLiveBroadcastsBindQueryParams queryParams;
    public YoutubeLiveBroadcastsBindRequest withQueryParams(YoutubeLiveBroadcastsBindQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeLiveBroadcastsBindSecurity security;
    public YoutubeLiveBroadcastsBindRequest withSecurity(YoutubeLiveBroadcastsBindSecurity security) {
        this.security = security;
        return this;
    }
}