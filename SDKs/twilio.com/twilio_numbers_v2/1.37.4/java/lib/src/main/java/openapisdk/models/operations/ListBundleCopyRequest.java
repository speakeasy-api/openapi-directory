package openapisdk.models.operations;



public class ListBundleCopyRequest {
    public String serverURL;
    public ListBundleCopyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBundleCopyPathParams pathParams;
    public ListBundleCopyRequest withPathParams(ListBundleCopyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBundleCopyQueryParams queryParams;
    public ListBundleCopyRequest withQueryParams(ListBundleCopyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBundleCopySecurity security;
    public ListBundleCopyRequest withSecurity(ListBundleCopySecurity security) {
        this.security = security;
        return this;
    }
}