package openapisdk.models.operations;



public class ListIpCommandRequest {
    public String serverURL;
    public ListIpCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIpCommandQueryParams queryParams;
    public ListIpCommandRequest withQueryParams(ListIpCommandQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIpCommandSecurity security;
    public ListIpCommandRequest withSecurity(ListIpCommandSecurity security) {
        this.security = security;
        return this;
    }
}