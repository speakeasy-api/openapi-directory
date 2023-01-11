package openapisdk.models.operations;



public class DisplayvideoMediaDownloadRequest {
    public DisplayvideoMediaDownloadPathParams pathParams;
    public DisplayvideoMediaDownloadRequest withPathParams(DisplayvideoMediaDownloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoMediaDownloadQueryParams queryParams;
    public DisplayvideoMediaDownloadRequest withQueryParams(DisplayvideoMediaDownloadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DisplayvideoMediaDownloadSecurity security;
    public DisplayvideoMediaDownloadRequest withSecurity(DisplayvideoMediaDownloadSecurity security) {
        this.security = security;
        return this;
    }
}