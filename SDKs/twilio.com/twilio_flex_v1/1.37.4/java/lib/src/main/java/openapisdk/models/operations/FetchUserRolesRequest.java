package openapisdk.models.operations;



public class FetchUserRolesRequest {
    public String serverURL;
    public FetchUserRolesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUserRolesHeaders headers;
    public FetchUserRolesRequest withHeaders(FetchUserRolesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FetchUserRolesSecurity security;
    public FetchUserRolesRequest withSecurity(FetchUserRolesSecurity security) {
        this.security = security;
        return this;
    }
}