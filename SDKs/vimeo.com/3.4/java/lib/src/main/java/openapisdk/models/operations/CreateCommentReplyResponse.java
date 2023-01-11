package openapisdk.models.operations;



public class CreateCommentReplyResponse {
    public String contentType;
    public CreateCommentReplyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCommentReplyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment comment;
    public CreateCommentReplyResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateCommentReplyResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}