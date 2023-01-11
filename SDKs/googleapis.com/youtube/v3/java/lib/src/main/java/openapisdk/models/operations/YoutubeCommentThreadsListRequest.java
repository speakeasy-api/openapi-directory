package openapisdk.models.operations;



public class YoutubeCommentThreadsListRequest {
    public YoutubeCommentThreadsListQueryParams queryParams;
    public YoutubeCommentThreadsListRequest withQueryParams(YoutubeCommentThreadsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCommentThreadsListSecurity security;
    public YoutubeCommentThreadsListRequest withSecurity(YoutubeCommentThreadsListSecurity security) {
        this.security = security;
        return this;
    }
}