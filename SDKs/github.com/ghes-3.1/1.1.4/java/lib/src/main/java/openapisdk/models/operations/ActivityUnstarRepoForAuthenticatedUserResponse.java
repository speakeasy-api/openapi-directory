package openapisdk.models.operations;



public class ActivityUnstarRepoForAuthenticatedUserResponse {
    public String contentType;
    public ActivityUnstarRepoForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityUnstarRepoForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityUnstarRepoForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}