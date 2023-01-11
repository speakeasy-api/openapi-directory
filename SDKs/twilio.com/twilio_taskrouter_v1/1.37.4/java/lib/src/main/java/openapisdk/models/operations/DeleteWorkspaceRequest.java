package openapisdk.models.operations;



public class DeleteWorkspaceRequest {
    public String serverURL;
    public DeleteWorkspaceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteWorkspacePathParams pathParams;
    public DeleteWorkspaceRequest withPathParams(DeleteWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWorkspaceSecurity security;
    public DeleteWorkspaceRequest withSecurity(DeleteWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}