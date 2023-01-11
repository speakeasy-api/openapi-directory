package openapisdk.models.operations;



public class BloggerCommentsListResponse {
    public openapisdk.models.shared.CommentList commentList;
    public BloggerCommentsListResponse withCommentList(openapisdk.models.shared.CommentList commentList) {
        this.commentList = commentList;
        return this;
    }
    public String contentType;
    public BloggerCommentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerCommentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}