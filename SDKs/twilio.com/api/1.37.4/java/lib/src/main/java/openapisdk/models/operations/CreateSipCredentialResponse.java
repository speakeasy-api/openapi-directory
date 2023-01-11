package openapisdk.models.operations;



public class CreateSipCredentialResponse {
    public String contentType;
    public CreateSipCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential;
    public CreateSipCredentialResponse withApiV2010AccountSipSipCredentialListSipCredential(openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential) {
        this.apiV2010AccountSipSipCredentialListSipCredential = apiV2010AccountSipSipCredentialListSipCredential;
        return this;
    }
}