package openapisdk.models.operations;



public class DriveCommentsListResponse {
    public openapisdk.models.shared.CommentList commentList;
    public DriveCommentsListResponse withCommentList(openapisdk.models.shared.CommentList commentList) {
        this.commentList = commentList;
        return this;
    }
    public String contentType;
    public DriveCommentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveCommentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}