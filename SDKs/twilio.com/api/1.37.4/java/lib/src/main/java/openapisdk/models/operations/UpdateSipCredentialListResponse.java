package openapisdk.models.operations;



public class UpdateSipCredentialListResponse {
    public String contentType;
    public UpdateSipCredentialListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSipCredentialListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipCredentialList apiV2010AccountSipSipCredentialList;
    public UpdateSipCredentialListResponse withApiV2010AccountSipSipCredentialList(openapisdk.models.shared.ApiV2010AccountSipSipCredentialList apiV2010AccountSipSipCredentialList) {
        this.apiV2010AccountSipSipCredentialList = apiV2010AccountSipSipCredentialList;
        return this;
    }
}