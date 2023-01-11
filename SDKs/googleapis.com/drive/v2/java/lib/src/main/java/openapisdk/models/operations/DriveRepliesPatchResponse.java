package openapisdk.models.operations;



public class DriveRepliesPatchResponse {
    public openapisdk.models.shared.CommentReply commentReply;
    public DriveRepliesPatchResponse withCommentReply(openapisdk.models.shared.CommentReply commentReply) {
        this.commentReply = commentReply;
        return this;
    }
    public String contentType;
    public DriveRepliesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveRepliesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}