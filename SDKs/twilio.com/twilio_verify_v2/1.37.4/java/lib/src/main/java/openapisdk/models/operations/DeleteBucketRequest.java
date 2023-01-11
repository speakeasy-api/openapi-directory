package openapisdk.models.operations;



public class DeleteBucketRequest {
    public String serverURL;
    public DeleteBucketRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteBucketPathParams pathParams;
    public DeleteBucketRequest withPathParams(DeleteBucketPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBucketSecurity security;
    public DeleteBucketRequest withSecurity(DeleteBucketSecurity security) {
        this.security = security;
        return this;
    }
}