package openapisdk.models.operations;



public class IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse {
    public String contentType;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateIdTokenResponse generateIdTokenResponse;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse withGenerateIdTokenResponse(openapisdk.models.shared.GenerateIdTokenResponse generateIdTokenResponse) {
        this.generateIdTokenResponse = generateIdTokenResponse;
        return this;
    }
    public Long statusCode;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}