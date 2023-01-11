package openapisdk.models.operations;



public class FetchSipCredentialResponse {
    public String contentType;
    public FetchSipCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential;
    public FetchSipCredentialResponse withApiV2010AccountSipSipCredentialListSipCredential(openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential) {
        this.apiV2010AccountSipSipCredentialListSipCredential = apiV2010AccountSipSipCredentialListSipCredential;
        return this;
    }
}