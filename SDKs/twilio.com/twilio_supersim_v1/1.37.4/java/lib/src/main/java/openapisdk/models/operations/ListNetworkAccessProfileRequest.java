package openapisdk.models.operations;



public class ListNetworkAccessProfileRequest {
    public String serverURL;
    public ListNetworkAccessProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListNetworkAccessProfileQueryParams queryParams;
    public ListNetworkAccessProfileRequest withQueryParams(ListNetworkAccessProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNetworkAccessProfileSecurity security;
    public ListNetworkAccessProfileRequest withSecurity(ListNetworkAccessProfileSecurity security) {
        this.security = security;
        return this;
    }
}