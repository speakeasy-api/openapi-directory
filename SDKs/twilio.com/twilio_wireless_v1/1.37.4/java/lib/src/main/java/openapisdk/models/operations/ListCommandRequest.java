package openapisdk.models.operations;



public class ListCommandRequest {
    public String serverURL;
    public ListCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCommandQueryParams queryParams;
    public ListCommandRequest withQueryParams(ListCommandQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCommandSecurity security;
    public ListCommandRequest withSecurity(ListCommandSecurity security) {
        this.security = security;
        return this;
    }
}