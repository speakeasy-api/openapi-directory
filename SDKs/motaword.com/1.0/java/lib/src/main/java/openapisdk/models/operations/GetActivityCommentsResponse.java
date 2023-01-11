package openapisdk.models.operations;



public class GetActivityCommentsResponse {
    public openapisdk.models.shared.CommentList commentList;
    public GetActivityCommentsResponse withCommentList(openapisdk.models.shared.CommentList commentList) {
        this.commentList = commentList;
        return this;
    }
    public String contentType;
    public GetActivityCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetActivityCommentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetActivityCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}