package openapisdk.models.operations;



public class FetchFlexFlowRequest {
    public String serverURL;
    public FetchFlexFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFlexFlowPathParams pathParams;
    public FetchFlexFlowRequest withPathParams(FetchFlexFlowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFlexFlowSecurity security;
    public FetchFlexFlowRequest withSecurity(FetchFlexFlowSecurity security) {
        this.security = security;
        return this;
    }
}