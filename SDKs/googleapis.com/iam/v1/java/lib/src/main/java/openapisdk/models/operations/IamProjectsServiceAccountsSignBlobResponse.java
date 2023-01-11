package openapisdk.models.operations;



public class IamProjectsServiceAccountsSignBlobResponse {
    public String contentType;
    public IamProjectsServiceAccountsSignBlobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SignBlobResponse signBlobResponse;
    public IamProjectsServiceAccountsSignBlobResponse withSignBlobResponse(openapisdk.models.shared.SignBlobResponse signBlobResponse) {
        this.signBlobResponse = signBlobResponse;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsSignBlobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}