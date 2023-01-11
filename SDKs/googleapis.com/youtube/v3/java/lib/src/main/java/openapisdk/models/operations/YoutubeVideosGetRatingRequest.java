package openapisdk.models.operations;



public class YoutubeVideosGetRatingRequest {
    public YoutubeVideosGetRatingQueryParams queryParams;
    public YoutubeVideosGetRatingRequest withQueryParams(YoutubeVideosGetRatingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeVideosGetRatingSecurity security;
    public YoutubeVideosGetRatingRequest withSecurity(YoutubeVideosGetRatingSecurity security) {
        this.security = security;
        return this;
    }
}