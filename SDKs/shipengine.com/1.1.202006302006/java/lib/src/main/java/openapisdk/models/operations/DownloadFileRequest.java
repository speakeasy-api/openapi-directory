package openapisdk.models.operations;



public class DownloadFileRequest {
    public DownloadFilePathParams pathParams;
    public DownloadFileRequest withPathParams(DownloadFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DownloadFileQueryParams queryParams;
    public DownloadFileRequest withQueryParams(DownloadFileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}