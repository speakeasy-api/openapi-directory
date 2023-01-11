package openapisdk.models.operations;



public class FetchAccountRequest {
    public String serverURL;
    public FetchAccountRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAccountPathParams pathParams;
    public FetchAccountRequest withPathParams(FetchAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAccountSecurity security;
    public FetchAccountRequest withSecurity(FetchAccountSecurity security) {
        this.security = security;
        return this;
    }
}