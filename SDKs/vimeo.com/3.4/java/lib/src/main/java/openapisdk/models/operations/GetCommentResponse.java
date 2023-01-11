package openapisdk.models.operations;



public class GetCommentResponse {
    public String contentType;
    public GetCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment comment;
    public GetCommentResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCommentResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}