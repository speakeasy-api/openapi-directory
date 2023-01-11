package openapisdk.models.operations;



public class CreateCommentAlt1Response {
    public String contentType;
    public CreateCommentAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCommentAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment comment;
    public CreateCommentAlt1Response withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateCommentAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}