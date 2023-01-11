package openapisdk.models.operations;



public class PullsGetReviewCommentResponse {
    public String contentType;
    public PullsGetReviewCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsGetReviewCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsGetReviewCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment;
    public PullsGetReviewCommentResponse withPullRequestReviewComment(openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment) {
        this.pullRequestReviewComment = pullRequestReviewComment;
        return this;
    }
}