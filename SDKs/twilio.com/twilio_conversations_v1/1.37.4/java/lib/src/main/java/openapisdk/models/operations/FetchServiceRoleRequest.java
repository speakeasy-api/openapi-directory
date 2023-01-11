package openapisdk.models.operations;



public class FetchServiceRoleRequest {
    public String serverURL;
    public FetchServiceRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceRolePathParams pathParams;
    public FetchServiceRoleRequest withPathParams(FetchServiceRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceRoleSecurity security;
    public FetchServiceRoleRequest withSecurity(FetchServiceRoleSecurity security) {
        this.security = security;
        return this;
    }
}