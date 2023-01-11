package openapisdk.models.operations;



public class FetchQueryRequest {
    public String serverURL;
    public FetchQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchQueryPathParams pathParams;
    public FetchQueryRequest withPathParams(FetchQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchQuerySecurity security;
    public FetchQueryRequest withSecurity(FetchQuerySecurity security) {
        this.security = security;
        return this;
    }
}