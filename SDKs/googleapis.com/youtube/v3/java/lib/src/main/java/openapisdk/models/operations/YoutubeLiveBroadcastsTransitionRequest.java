package openapisdk.models.operations;



public class YoutubeLiveBroadcastsTransitionRequest {
    public YoutubeLiveBroadcastsTransitionQueryParams queryParams;
    public YoutubeLiveBroadcastsTransitionRequest withQueryParams(YoutubeLiveBroadcastsTransitionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeLiveBroadcastsTransitionSecurity security;
    public YoutubeLiveBroadcastsTransitionRequest withSecurity(YoutubeLiveBroadcastsTransitionSecurity security) {
        this.security = security;
        return this;
    }
}