package openapisdk.models.operations;



public class FetchSipCredentialListResponse {
    public String contentType;
    public FetchSipCredentialListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipCredentialListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipCredentialList apiV2010AccountSipSipCredentialList;
    public FetchSipCredentialListResponse withApiV2010AccountSipSipCredentialList(openapisdk.models.shared.ApiV2010AccountSipSipCredentialList apiV2010AccountSipSipCredentialList) {
        this.apiV2010AccountSipSipCredentialList = apiV2010AccountSipSipCredentialList;
        return this;
    }
}