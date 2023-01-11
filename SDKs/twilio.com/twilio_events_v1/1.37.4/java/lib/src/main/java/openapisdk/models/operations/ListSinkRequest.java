package openapisdk.models.operations;



public class ListSinkRequest {
    public String serverURL;
    public ListSinkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSinkQueryParams queryParams;
    public ListSinkRequest withQueryParams(ListSinkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSinkSecurity security;
    public ListSinkRequest withSecurity(ListSinkSecurity security) {
        this.security = security;
        return this;
    }
}