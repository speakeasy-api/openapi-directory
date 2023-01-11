package openapisdk.models.operations;



public class YoutubeCommentThreadsListResponse {
    public openapisdk.models.shared.CommentThreadListResponse commentThreadListResponse;
    public YoutubeCommentThreadsListResponse withCommentThreadListResponse(openapisdk.models.shared.CommentThreadListResponse commentThreadListResponse) {
        this.commentThreadListResponse = commentThreadListResponse;
        return this;
    }
    public String contentType;
    public YoutubeCommentThreadsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCommentThreadsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}