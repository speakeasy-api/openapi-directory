package openapisdk.models.operations;



public class YoutubeVideosRateRequest {
    public YoutubeVideosRateQueryParams queryParams;
    public YoutubeVideosRateRequest withQueryParams(YoutubeVideosRateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeVideosRateSecurity security;
    public YoutubeVideosRateRequest withSecurity(YoutubeVideosRateSecurity security) {
        this.security = security;
        return this;
    }
}