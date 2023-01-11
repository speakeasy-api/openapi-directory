package openapisdk.models.operations;



public class ListServiceRoleRequest {
    public String serverURL;
    public ListServiceRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceRolePathParams pathParams;
    public ListServiceRoleRequest withPathParams(ListServiceRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceRoleQueryParams queryParams;
    public ListServiceRoleRequest withQueryParams(ListServiceRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceRoleSecurity security;
    public ListServiceRoleRequest withSecurity(ListServiceRoleSecurity security) {
        this.security = security;
        return this;
    }
}