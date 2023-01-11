package openapisdk.models.operations;



public class CreateCommentResponse {
    public String contentType;
    public CreateCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment comment;
    public CreateCommentResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateCommentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}