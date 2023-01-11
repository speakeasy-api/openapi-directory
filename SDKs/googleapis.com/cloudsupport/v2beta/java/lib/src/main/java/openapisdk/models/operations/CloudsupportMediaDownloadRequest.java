package openapisdk.models.operations;



public class CloudsupportMediaDownloadRequest {
    public CloudsupportMediaDownloadPathParams pathParams;
    public CloudsupportMediaDownloadRequest withPathParams(CloudsupportMediaDownloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportMediaDownloadQueryParams queryParams;
    public CloudsupportMediaDownloadRequest withQueryParams(CloudsupportMediaDownloadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudsupportMediaDownloadSecurity security;
    public CloudsupportMediaDownloadRequest withSecurity(CloudsupportMediaDownloadSecurity security) {
        this.security = security;
        return this;
    }
}