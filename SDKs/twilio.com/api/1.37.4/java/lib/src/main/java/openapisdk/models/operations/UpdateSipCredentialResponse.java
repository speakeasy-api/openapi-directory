package openapisdk.models.operations;



public class UpdateSipCredentialResponse {
    public String contentType;
    public UpdateSipCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSipCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential;
    public UpdateSipCredentialResponse withApiV2010AccountSipSipCredentialListSipCredential(openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential) {
        this.apiV2010AccountSipSipCredentialListSipCredential = apiV2010AccountSipSipCredentialListSipCredential;
        return this;
    }
}