package openapisdk.models.operations;



public class FetchBucketRequest {
    public String serverURL;
    public FetchBucketRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBucketPathParams pathParams;
    public FetchBucketRequest withPathParams(FetchBucketPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBucketSecurity security;
    public FetchBucketRequest withSecurity(FetchBucketSecurity security) {
        this.security = security;
        return this;
    }
}