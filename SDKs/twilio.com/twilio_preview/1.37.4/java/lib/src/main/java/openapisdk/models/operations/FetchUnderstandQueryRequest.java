package openapisdk.models.operations;



public class FetchUnderstandQueryRequest {
    public String serverURL;
    public FetchUnderstandQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandQueryPathParams pathParams;
    public FetchUnderstandQueryRequest withPathParams(FetchUnderstandQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandQuerySecurity security;
    public FetchUnderstandQueryRequest withSecurity(FetchUnderstandQuerySecurity security) {
        this.security = security;
        return this;
    }
}