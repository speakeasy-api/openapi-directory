package openapisdk.models.operations;



public class GistsUpdateCommentResponse {
    public String contentType;
    public GistsUpdateCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GistsUpdateCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsUpdateCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistComment gistComment;
    public GistsUpdateCommentResponse withGistComment(openapisdk.models.shared.GistComment gistComment) {
        this.gistComment = gistComment;
        return this;
    }
}