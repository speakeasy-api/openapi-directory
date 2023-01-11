package openapisdk.models.operations;



public class DriveRepliesListResponse {
    public openapisdk.models.shared.CommentReplyList commentReplyList;
    public DriveRepliesListResponse withCommentReplyList(openapisdk.models.shared.CommentReplyList commentReplyList) {
        this.commentReplyList = commentReplyList;
        return this;
    }
    public String contentType;
    public DriveRepliesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveRepliesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}