package openapisdk.models.operations;



public class DriveRepliesGetResponse {
    public openapisdk.models.shared.CommentReply commentReply;
    public DriveRepliesGetResponse withCommentReply(openapisdk.models.shared.CommentReply commentReply) {
        this.commentReply = commentReply;
        return this;
    }
    public String contentType;
    public DriveRepliesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveRepliesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}