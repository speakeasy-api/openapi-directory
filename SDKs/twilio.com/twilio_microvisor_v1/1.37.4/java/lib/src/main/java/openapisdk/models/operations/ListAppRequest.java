package openapisdk.models.operations;



public class ListAppRequest {
    public String serverURL;
    public ListAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAppQueryParams queryParams;
    public ListAppRequest withQueryParams(ListAppQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAppSecurity security;
    public ListAppRequest withSecurity(ListAppSecurity security) {
        this.security = security;
        return this;
    }
}