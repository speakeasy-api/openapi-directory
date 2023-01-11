package openapisdk.models.operations;



public class IssuesListCommentsResponse {
    public String contentType;
    public IssuesListCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListCommentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListCommentsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.IssueComment[] issueComments;
    public IssuesListCommentsResponse withIssueComments(openapisdk.models.shared.IssueComment[] issueComments) {
        this.issueComments = issueComments;
        return this;
    }
}