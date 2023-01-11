package openapisdk.models.operations;



public class PullsUpdateResponse {
    public String contentType;
    public PullsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsUpdateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequest pullRequest;
    public PullsUpdateResponse withPullRequest(openapisdk.models.shared.PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsUpdateResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}