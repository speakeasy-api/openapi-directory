package openapisdk.models.operations;



public class FetchAccessTokenRequest {
    public String serverURL;
    public FetchAccessTokenRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAccessTokenPathParams pathParams;
    public FetchAccessTokenRequest withPathParams(FetchAccessTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAccessTokenSecurity security;
    public FetchAccessTokenRequest withSecurity(FetchAccessTokenSecurity security) {
        this.security = security;
        return this;
    }
}