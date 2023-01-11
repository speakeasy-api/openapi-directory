package openapisdk.models.operations;



public class FetchExecutionContextRequest {
    public String serverURL;
    public FetchExecutionContextRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchExecutionContextPathParams pathParams;
    public FetchExecutionContextRequest withPathParams(FetchExecutionContextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchExecutionContextSecurity security;
    public FetchExecutionContextRequest withSecurity(FetchExecutionContextSecurity security) {
        this.security = security;
        return this;
    }
}