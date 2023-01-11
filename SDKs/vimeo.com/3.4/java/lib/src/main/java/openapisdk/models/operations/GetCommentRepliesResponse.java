package openapisdk.models.operations;



public class GetCommentRepliesResponse {
    public String contentType;
    public GetCommentRepliesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommentRepliesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment[] comments;
    public GetCommentRepliesResponse withComments(openapisdk.models.shared.Comment[] comments) {
        this.comments = comments;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCommentRepliesResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}