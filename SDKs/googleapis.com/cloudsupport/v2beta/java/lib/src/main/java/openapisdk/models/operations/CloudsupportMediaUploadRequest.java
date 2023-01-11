package openapisdk.models.operations;



public class CloudsupportMediaUploadRequest {
    public CloudsupportMediaUploadPathParams pathParams;
    public CloudsupportMediaUploadRequest withPathParams(CloudsupportMediaUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportMediaUploadQueryParams queryParams;
    public CloudsupportMediaUploadRequest withQueryParams(CloudsupportMediaUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudsupportMediaUploadRequestsInput request;
    public CloudsupportMediaUploadRequest withRequest(CloudsupportMediaUploadRequestsInput request) {
        this.request = request;
        return this;
    }
    public CloudsupportMediaUploadSecurity security;
    public CloudsupportMediaUploadRequest withSecurity(CloudsupportMediaUploadSecurity security) {
        this.security = security;
        return this;
    }
}