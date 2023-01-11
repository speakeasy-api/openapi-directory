package openapisdk.models.operations;



public class YoutubeCommentsDeleteRequest {
    public YoutubeCommentsDeleteQueryParams queryParams;
    public YoutubeCommentsDeleteRequest withQueryParams(YoutubeCommentsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCommentsDeleteSecurity security;
    public YoutubeCommentsDeleteRequest withSecurity(YoutubeCommentsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}