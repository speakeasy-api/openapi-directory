package openapisdk.models.operations;



public class ListUserRequest {
    public String serverURL;
    public ListUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUserQueryParams queryParams;
    public ListUserRequest withQueryParams(ListUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUserSecurity security;
    public ListUserRequest withSecurity(ListUserSecurity security) {
        this.security = security;
        return this;
    }
}