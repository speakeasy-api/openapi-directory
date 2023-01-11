package openapisdk.models.operations;



public class ListConnectAppRequest {
    public String serverURL;
    public ListConnectAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConnectAppPathParams pathParams;
    public ListConnectAppRequest withPathParams(ListConnectAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConnectAppQueryParams queryParams;
    public ListConnectAppRequest withQueryParams(ListConnectAppQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConnectAppSecurity security;
    public ListConnectAppRequest withSecurity(ListConnectAppSecurity security) {
        this.security = security;
        return this;
    }
}