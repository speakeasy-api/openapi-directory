package openapisdk.models.operations;



public class AppsAddRepoToInstallationResponse {
    public String contentType;
    public AppsAddRepoToInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsAddRepoToInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsAddRepoToInstallationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}