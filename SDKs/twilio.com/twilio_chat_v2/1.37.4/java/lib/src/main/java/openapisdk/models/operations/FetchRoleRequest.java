package openapisdk.models.operations;



public class FetchRoleRequest {
    public String serverURL;
    public FetchRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRolePathParams pathParams;
    public FetchRoleRequest withPathParams(FetchRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoleSecurity security;
    public FetchRoleRequest withSecurity(FetchRoleSecurity security) {
        this.security = security;
        return this;
    }
}