package openapisdk.models.operations;



public class ListNetworkAccessProfileNetworkRequest {
    public String serverURL;
    public ListNetworkAccessProfileNetworkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListNetworkAccessProfileNetworkPathParams pathParams;
    public ListNetworkAccessProfileNetworkRequest withPathParams(ListNetworkAccessProfileNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListNetworkAccessProfileNetworkQueryParams queryParams;
    public ListNetworkAccessProfileNetworkRequest withQueryParams(ListNetworkAccessProfileNetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNetworkAccessProfileNetworkSecurity security;
    public ListNetworkAccessProfileNetworkRequest withSecurity(ListNetworkAccessProfileNetworkSecurity security) {
        this.security = security;
        return this;
    }
}