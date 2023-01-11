package openapisdk.models.operations;



public class DeleteServiceRoleRequest {
    public String serverURL;
    public DeleteServiceRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceRolePathParams pathParams;
    public DeleteServiceRoleRequest withPathParams(DeleteServiceRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceRoleSecurity security;
    public DeleteServiceRoleRequest withSecurity(DeleteServiceRoleSecurity security) {
        this.security = security;
        return this;
    }
}