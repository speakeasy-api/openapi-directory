package openapisdk.models.operations;



public class FetchAppRequest {
    public String serverURL;
    public FetchAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAppPathParams pathParams;
    public FetchAppRequest withPathParams(FetchAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAppSecurity security;
    public FetchAppRequest withSecurity(FetchAppSecurity security) {
        this.security = security;
        return this;
    }
}