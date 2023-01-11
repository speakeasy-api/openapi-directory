package openapisdk.models.operations;



public class DeleteFlowRequest {
    public String serverURL;
    public DeleteFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFlowPathParams pathParams;
    public DeleteFlowRequest withPathParams(DeleteFlowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFlowSecurity security;
    public DeleteFlowRequest withSecurity(DeleteFlowSecurity security) {
        this.security = security;
        return this;
    }
}