package openapisdk.models.operations;



public class FetchActivityRequest {
    public String serverURL;
    public FetchActivityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchActivityPathParams pathParams;
    public FetchActivityRequest withPathParams(FetchActivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchActivitySecurity security;
    public FetchActivityRequest withSecurity(FetchActivitySecurity security) {
        this.security = security;
        return this;
    }
}