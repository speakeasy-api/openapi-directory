package openapisdk.models.operations;



public class GistsListCommentsResponse {
    public String contentType;
    public GistsListCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsListCommentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsListCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsListCommentsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistComment[] gistComments;
    public GistsListCommentsResponse withGistComments(openapisdk.models.shared.GistComment[] gistComments) {
        this.gistComments = gistComments;
        return this;
    }
}