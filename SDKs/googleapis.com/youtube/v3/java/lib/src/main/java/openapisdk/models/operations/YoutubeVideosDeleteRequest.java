package openapisdk.models.operations;



public class YoutubeVideosDeleteRequest {
    public YoutubeVideosDeleteQueryParams queryParams;
    public YoutubeVideosDeleteRequest withQueryParams(YoutubeVideosDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeVideosDeleteSecurity security;
    public YoutubeVideosDeleteRequest withSecurity(YoutubeVideosDeleteSecurity security) {
        this.security = security;
        return this;
    }
}