package openapisdk.models.operations;



public class YoutubeCommentsListRequest {
    public YoutubeCommentsListQueryParams queryParams;
    public YoutubeCommentsListRequest withQueryParams(YoutubeCommentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCommentsListSecurity security;
    public YoutubeCommentsListRequest withSecurity(YoutubeCommentsListSecurity security) {
        this.security = security;
        return this;
    }
}