package openapisdk.models.operations;



public class FetchWorkflowRequest {
    public String serverURL;
    public FetchWorkflowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkflowPathParams pathParams;
    public FetchWorkflowRequest withPathParams(FetchWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkflowSecurity security;
    public FetchWorkflowRequest withSecurity(FetchWorkflowSecurity security) {
        this.security = security;
        return this;
    }
}