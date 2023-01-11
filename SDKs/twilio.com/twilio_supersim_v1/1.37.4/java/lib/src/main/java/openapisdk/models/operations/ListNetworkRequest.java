package openapisdk.models.operations;



public class ListNetworkRequest {
    public String serverURL;
    public ListNetworkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListNetworkQueryParams queryParams;
    public ListNetworkRequest withQueryParams(ListNetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNetworkSecurity security;
    public ListNetworkRequest withSecurity(ListNetworkSecurity security) {
        this.security = security;
        return this;
    }
}