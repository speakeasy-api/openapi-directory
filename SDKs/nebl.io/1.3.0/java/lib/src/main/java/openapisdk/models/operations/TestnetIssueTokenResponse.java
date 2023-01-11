package openapisdk.models.operations;



public class TestnetIssueTokenResponse {
    public String contentType;
    public TestnetIssueTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetIssueTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetIssueTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IssueTokenResponse issueTokenResponse;
    public TestnetIssueTokenResponse withIssueTokenResponse(openapisdk.models.shared.IssueTokenResponse issueTokenResponse) {
        this.issueTokenResponse = issueTokenResponse;
        return this;
    }
}