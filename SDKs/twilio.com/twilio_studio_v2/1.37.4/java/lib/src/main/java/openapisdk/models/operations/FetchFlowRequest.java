package openapisdk.models.operations;



public class FetchFlowRequest {
    public String serverURL;
    public FetchFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFlowPathParams pathParams;
    public FetchFlowRequest withPathParams(FetchFlowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFlowSecurity security;
    public FetchFlowRequest withSecurity(FetchFlowSecurity security) {
        this.security = security;
        return this;
    }
}