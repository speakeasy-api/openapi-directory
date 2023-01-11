package openapisdk.models.operations;



public class IssueTokenResponse {
    public String contentType;
    public IssueTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public IssueTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public IssueTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IssueTokenResponse issueTokenResponse;
    public IssueTokenResponse withIssueTokenResponse(openapisdk.models.shared.IssueTokenResponse issueTokenResponse) {
        this.issueTokenResponse = issueTokenResponse;
        return this;
    }
}