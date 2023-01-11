package openapisdk.models.operations;



public class PullsCreateReviewCommentResponse {
    public String contentType;
    public PullsCreateReviewCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsCreateReviewCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsCreateReviewCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsCreateReviewCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment;
    public PullsCreateReviewCommentResponse withPullRequestReviewComment(openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment) {
        this.pullRequestReviewComment = pullRequestReviewComment;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsCreateReviewCommentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}