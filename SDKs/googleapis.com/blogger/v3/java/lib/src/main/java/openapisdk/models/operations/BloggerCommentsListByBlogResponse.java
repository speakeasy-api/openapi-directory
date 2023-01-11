package openapisdk.models.operations;



public class BloggerCommentsListByBlogResponse {
    public openapisdk.models.shared.CommentList commentList;
    public BloggerCommentsListByBlogResponse withCommentList(openapisdk.models.shared.CommentList commentList) {
        this.commentList = commentList;
        return this;
    }
    public String contentType;
    public BloggerCommentsListByBlogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerCommentsListByBlogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}