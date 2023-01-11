package openapisdk.models.operations;



public class YoutubeChannelsListRequest {
    public YoutubeChannelsListQueryParams queryParams;
    public YoutubeChannelsListRequest withQueryParams(YoutubeChannelsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeChannelsListSecurity security;
    public YoutubeChannelsListRequest withSecurity(YoutubeChannelsListSecurity security) {
        this.security = security;
        return this;
    }
}