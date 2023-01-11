package openapisdk.models.operations;



public class ListServiceUserRequest {
    public String serverURL;
    public ListServiceUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceUserPathParams pathParams;
    public ListServiceUserRequest withPathParams(ListServiceUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceUserQueryParams queryParams;
    public ListServiceUserRequest withQueryParams(ListServiceUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceUserSecurity security;
    public ListServiceUserRequest withSecurity(ListServiceUserSecurity security) {
        this.security = security;
        return this;
    }
}