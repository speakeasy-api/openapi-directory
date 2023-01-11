package openapisdk.models.operations;



public class ListRoleRequest {
    public String serverURL;
    public ListRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRolePathParams pathParams;
    public ListRoleRequest withPathParams(ListRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRoleQueryParams queryParams;
    public ListRoleRequest withQueryParams(ListRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoleSecurity security;
    public ListRoleRequest withSecurity(ListRoleSecurity security) {
        this.security = security;
        return this;
    }
}