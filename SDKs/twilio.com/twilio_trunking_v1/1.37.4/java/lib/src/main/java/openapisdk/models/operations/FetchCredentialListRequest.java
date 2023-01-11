package openapisdk.models.operations;



public class FetchCredentialListRequest {
    public String serverURL;
    public FetchCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCredentialListPathParams pathParams;
    public FetchCredentialListRequest withPathParams(FetchCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCredentialListSecurity security;
    public FetchCredentialListRequest withSecurity(FetchCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}