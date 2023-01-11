package openapisdk.models.operations;



public class PlusCommentsListResponse {
    public openapisdk.models.shared.CommentFeed commentFeed;
    public PlusCommentsListResponse withCommentFeed(openapisdk.models.shared.CommentFeed commentFeed) {
        this.commentFeed = commentFeed;
        return this;
    }
    public String contentType;
    public PlusCommentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlusCommentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}