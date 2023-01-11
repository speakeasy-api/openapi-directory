package openapisdk.models.operations;



public class YoutubeVideosListRequest {
    public YoutubeVideosListQueryParams queryParams;
    public YoutubeVideosListRequest withQueryParams(YoutubeVideosListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeVideosListSecurity security;
    public YoutubeVideosListRequest withSecurity(YoutubeVideosListSecurity security) {
        this.security = security;
        return this;
    }
}