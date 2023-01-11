package openapisdk.models.operations;



public class IamcredentialsProjectsServiceAccountsSignBlobResponse {
    public String contentType;
    public IamcredentialsProjectsServiceAccountsSignBlobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SignBlobResponse signBlobResponse;
    public IamcredentialsProjectsServiceAccountsSignBlobResponse withSignBlobResponse(openapisdk.models.shared.SignBlobResponse signBlobResponse) {
        this.signBlobResponse = signBlobResponse;
        return this;
    }
    public Long statusCode;
    public IamcredentialsProjectsServiceAccountsSignBlobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}