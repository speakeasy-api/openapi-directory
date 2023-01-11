package openapisdk.models.operations;



public class DeleteWorkflowRequest {
    public String serverURL;
    public DeleteWorkflowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteWorkflowPathParams pathParams;
    public DeleteWorkflowRequest withPathParams(DeleteWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWorkflowSecurity security;
    public DeleteWorkflowRequest withSecurity(DeleteWorkflowSecurity security) {
        this.security = security;
        return this;
    }
}