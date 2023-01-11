package openapisdk.models.operations;



public class DriveRepliesUpdateResponse {
    public openapisdk.models.shared.CommentReply commentReply;
    public DriveRepliesUpdateResponse withCommentReply(openapisdk.models.shared.CommentReply commentReply) {
        this.commentReply = commentReply;
        return this;
    }
    public String contentType;
    public DriveRepliesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveRepliesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}