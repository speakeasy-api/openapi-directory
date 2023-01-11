package openapisdk.models.operations;



public class IssuesListLabelsOnIssueResponse {
    public String contentType;
    public IssuesListLabelsOnIssueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListLabelsOnIssueResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListLabelsOnIssueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesListLabelsOnIssueResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Label[] labels;
    public IssuesListLabelsOnIssueResponse withLabels(openapisdk.models.shared.Label[] labels) {
        this.labels = labels;
        return this;
    }
}