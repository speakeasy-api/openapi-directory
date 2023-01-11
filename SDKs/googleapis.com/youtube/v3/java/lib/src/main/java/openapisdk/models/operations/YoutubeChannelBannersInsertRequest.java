package openapisdk.models.operations;



public class YoutubeChannelBannersInsertRequest {
    public YoutubeChannelBannersInsertQueryParams queryParams;
    public YoutubeChannelBannersInsertRequest withQueryParams(YoutubeChannelBannersInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeChannelBannersInsertRequests request;
    public YoutubeChannelBannersInsertRequest withRequest(YoutubeChannelBannersInsertRequests request) {
        this.request = request;
        return this;
    }
    public YoutubeChannelBannersInsertSecurity security;
    public YoutubeChannelBannersInsertRequest withSecurity(YoutubeChannelBannersInsertSecurity security) {
        this.security = security;
        return this;
    }
}