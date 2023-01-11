package openapisdk.models.operations;



public class ListWorkspaceRequest {
    public String serverURL;
    public ListWorkspaceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWorkspaceQueryParams queryParams;
    public ListWorkspaceRequest withQueryParams(ListWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkspaceSecurity security;
    public ListWorkspaceRequest withSecurity(ListWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}