package openapisdk.models.operations;



public class IamProjectsServiceAccountsSignJwtResponse {
    public String contentType;
    public IamProjectsServiceAccountsSignJwtResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SignJwtResponse signJwtResponse;
    public IamProjectsServiceAccountsSignJwtResponse withSignJwtResponse(openapisdk.models.shared.SignJwtResponse signJwtResponse) {
        this.signJwtResponse = signJwtResponse;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsSignJwtResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}