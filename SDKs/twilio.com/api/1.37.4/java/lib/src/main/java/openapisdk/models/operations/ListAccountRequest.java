package openapisdk.models.operations;



public class ListAccountRequest {
    public String serverURL;
    public ListAccountRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAccountQueryParams queryParams;
    public ListAccountRequest withQueryParams(ListAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountSecurity security;
    public ListAccountRequest withSecurity(ListAccountSecurity security) {
        this.security = security;
        return this;
    }
}