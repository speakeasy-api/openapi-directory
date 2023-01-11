package openapisdk.models.operations;



public class ListBucketRequest {
    public String serverURL;
    public ListBucketRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBucketPathParams pathParams;
    public ListBucketRequest withPathParams(ListBucketPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBucketQueryParams queryParams;
    public ListBucketRequest withQueryParams(ListBucketQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBucketSecurity security;
    public ListBucketRequest withSecurity(ListBucketSecurity security) {
        this.security = security;
        return this;
    }
}