package openapisdk.models.operations;



public class ListSmsCommandRequest {
    public String serverURL;
    public ListSmsCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSmsCommandQueryParams queryParams;
    public ListSmsCommandRequest withQueryParams(ListSmsCommandQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSmsCommandSecurity security;
    public ListSmsCommandRequest withSecurity(ListSmsCommandSecurity security) {
        this.security = security;
        return this;
    }
}