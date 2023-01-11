package openapisdk.models.operations;



public class YoutubeVideosInsertRequest {
    public YoutubeVideosInsertQueryParams queryParams;
    public YoutubeVideosInsertRequest withQueryParams(YoutubeVideosInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeVideosInsertRequests request;
    public YoutubeVideosInsertRequest withRequest(YoutubeVideosInsertRequests request) {
        this.request = request;
        return this;
    }
    public YoutubeVideosInsertSecurity security;
    public YoutubeVideosInsertRequest withSecurity(YoutubeVideosInsertSecurity security) {
        this.security = security;
        return this;
    }
}