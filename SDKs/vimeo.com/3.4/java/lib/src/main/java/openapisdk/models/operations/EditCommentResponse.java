package openapisdk.models.operations;



public class EditCommentResponse {
    public String contentType;
    public EditCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment comment;
    public EditCommentResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public EditCommentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}