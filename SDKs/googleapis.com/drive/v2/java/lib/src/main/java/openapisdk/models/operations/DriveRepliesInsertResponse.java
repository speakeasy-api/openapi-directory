package openapisdk.models.operations;



public class DriveRepliesInsertResponse {
    public openapisdk.models.shared.CommentReply commentReply;
    public DriveRepliesInsertResponse withCommentReply(openapisdk.models.shared.CommentReply commentReply) {
        this.commentReply = commentReply;
        return this;
    }
    public String contentType;
    public DriveRepliesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveRepliesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}