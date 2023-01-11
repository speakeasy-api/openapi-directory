package openapisdk.models.operations;



public class PullsListReviewCommentsResponse {
    public String contentType;
    public PullsListReviewCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListReviewCommentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListReviewCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestReviewComment[] pullRequestReviewComments;
    public PullsListReviewCommentsResponse withPullRequestReviewComments(openapisdk.models.shared.PullRequestReviewComment[] pullRequestReviewComments) {
        this.pullRequestReviewComments = pullRequestReviewComments;
        return this;
    }
}