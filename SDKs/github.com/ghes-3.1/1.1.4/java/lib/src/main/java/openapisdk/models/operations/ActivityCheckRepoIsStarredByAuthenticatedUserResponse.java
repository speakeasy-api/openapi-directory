package openapisdk.models.operations;



public class ActivityCheckRepoIsStarredByAuthenticatedUserResponse {
    public String contentType;
    public ActivityCheckRepoIsStarredByAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityCheckRepoIsStarredByAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityCheckRepoIsStarredByAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}