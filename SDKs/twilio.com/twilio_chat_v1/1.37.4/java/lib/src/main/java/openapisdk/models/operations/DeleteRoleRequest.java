package openapisdk.models.operations;



public class DeleteRoleRequest {
    public String serverURL;
    public DeleteRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRolePathParams pathParams;
    public DeleteRoleRequest withPathParams(DeleteRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRoleSecurity security;
    public DeleteRoleRequest withSecurity(DeleteRoleSecurity security) {
        this.security = security;
        return this;
    }
}