package openapisdk.models.operations;



public class IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse {
    public String contentType;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateAccessTokenResponse generateAccessTokenResponse;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse withGenerateAccessTokenResponse(openapisdk.models.shared.GenerateAccessTokenResponse generateAccessTokenResponse) {
        this.generateAccessTokenResponse = generateAccessTokenResponse;
        return this;
    }
    public Long statusCode;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}