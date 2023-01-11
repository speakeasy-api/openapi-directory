package openapisdk.models.operations;



public class IamcredentialsProjectsServiceAccountsSignJwtResponse {
    public String contentType;
    public IamcredentialsProjectsServiceAccountsSignJwtResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SignJwtResponse signJwtResponse;
    public IamcredentialsProjectsServiceAccountsSignJwtResponse withSignJwtResponse(openapisdk.models.shared.SignJwtResponse signJwtResponse) {
        this.signJwtResponse = signJwtResponse;
        return this;
    }
    public Long statusCode;
    public IamcredentialsProjectsServiceAccountsSignJwtResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}