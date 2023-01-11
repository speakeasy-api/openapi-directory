package openapisdk.models.operations;



public class YoutubeCommentsSetModerationStatusRequest {
    public YoutubeCommentsSetModerationStatusQueryParams queryParams;
    public YoutubeCommentsSetModerationStatusRequest withQueryParams(YoutubeCommentsSetModerationStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCommentsSetModerationStatusSecurity security;
    public YoutubeCommentsSetModerationStatusRequest withSecurity(YoutubeCommentsSetModerationStatusSecurity security) {
        this.security = security;
        return this;
    }
}