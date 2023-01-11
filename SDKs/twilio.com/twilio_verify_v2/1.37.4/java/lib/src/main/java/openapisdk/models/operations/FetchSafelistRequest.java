package openapisdk.models.operations;



public class FetchSafelistRequest {
    public String serverURL;
    public FetchSafelistRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSafelistPathParams pathParams;
    public FetchSafelistRequest withPathParams(FetchSafelistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSafelistSecurity security;
    public FetchSafelistRequest withSecurity(FetchSafelistSecurity security) {
        this.security = security;
        return this;
    }
}