package openapisdk.models.operations;



public class ListAuthorizedConnectAppRequest {
    public String serverURL;
    public ListAuthorizedConnectAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAuthorizedConnectAppPathParams pathParams;
    public ListAuthorizedConnectAppRequest withPathParams(ListAuthorizedConnectAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAuthorizedConnectAppQueryParams queryParams;
    public ListAuthorizedConnectAppRequest withQueryParams(ListAuthorizedConnectAppQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAuthorizedConnectAppSecurity security;
    public ListAuthorizedConnectAppRequest withSecurity(ListAuthorizedConnectAppSecurity security) {
        this.security = security;
        return this;
    }
}