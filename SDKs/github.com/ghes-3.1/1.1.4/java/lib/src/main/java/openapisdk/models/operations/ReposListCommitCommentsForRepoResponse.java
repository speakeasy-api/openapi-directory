package openapisdk.models.operations;



public class ReposListCommitCommentsForRepoResponse {
    public String contentType;
    public ReposListCommitCommentsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListCommitCommentsForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListCommitCommentsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CommitComment[] commitComments;
    public ReposListCommitCommentsForRepoResponse withCommitComments(openapisdk.models.shared.CommitComment[] commitComments) {
        this.commitComments = commitComments;
        return this;
    }
}