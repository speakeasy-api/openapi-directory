package openapisdk.models.operations;



public class FetchSipCredentialListRequest {
    public String serverURL;
    public FetchSipCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipCredentialListPathParams pathParams;
    public FetchSipCredentialListRequest withPathParams(FetchSipCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipCredentialListSecurity security;
    public FetchSipCredentialListRequest withSecurity(FetchSipCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}