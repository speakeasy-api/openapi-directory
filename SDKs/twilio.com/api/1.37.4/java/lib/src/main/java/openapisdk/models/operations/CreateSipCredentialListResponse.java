package openapisdk.models.operations;



public class CreateSipCredentialListResponse {
    public String contentType;
    public CreateSipCredentialListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipCredentialListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipCredentialList apiV2010AccountSipSipCredentialList;
    public CreateSipCredentialListResponse withApiV2010AccountSipSipCredentialList(openapisdk.models.shared.ApiV2010AccountSipSipCredentialList apiV2010AccountSipSipCredentialList) {
        this.apiV2010AccountSipSipCredentialList = apiV2010AccountSipSipCredentialList;
        return this;
    }
}