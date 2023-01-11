package openapisdk.models.operations;



public class GetCommentsResponse {
    public openapisdk.models.shared.CommentList commentList;
    public GetCommentsResponse withCommentList(openapisdk.models.shared.CommentList commentList) {
        this.commentList = commentList;
        return this;
    }
    public String contentType;
    public GetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCommentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}