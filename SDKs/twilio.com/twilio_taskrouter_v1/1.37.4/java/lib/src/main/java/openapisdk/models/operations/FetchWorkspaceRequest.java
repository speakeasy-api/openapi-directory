package openapisdk.models.operations;



public class FetchWorkspaceRequest {
    public String serverURL;
    public FetchWorkspaceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkspacePathParams pathParams;
    public FetchWorkspaceRequest withPathParams(FetchWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkspaceSecurity security;
    public FetchWorkspaceRequest withSecurity(FetchWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}