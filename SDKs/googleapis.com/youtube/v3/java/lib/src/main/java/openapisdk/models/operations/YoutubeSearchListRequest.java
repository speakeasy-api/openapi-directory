package openapisdk.models.operations;



public class YoutubeSearchListRequest {
    public YoutubeSearchListQueryParams queryParams;
    public YoutubeSearchListRequest withQueryParams(YoutubeSearchListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeSearchListSecurity security;
    public YoutubeSearchListRequest withSecurity(YoutubeSearchListSecurity security) {
        this.security = security;
        return this;
    }
}