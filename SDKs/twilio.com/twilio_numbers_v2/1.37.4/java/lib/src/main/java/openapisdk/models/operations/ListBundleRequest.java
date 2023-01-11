package openapisdk.models.operations;



public class ListBundleRequest {
    public String serverURL;
    public ListBundleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBundleQueryParams queryParams;
    public ListBundleRequest withQueryParams(ListBundleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBundleSecurity security;
    public ListBundleRequest withSecurity(ListBundleSecurity security) {
        this.security = security;
        return this;
    }
}