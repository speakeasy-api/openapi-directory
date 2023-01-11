package openapisdk.models.operations;



public class DownloadReportRequest {
    public DownloadReportPathParams pathParams;
    public DownloadReportRequest withPathParams(DownloadReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DownloadReportSecurity security;
    public DownloadReportRequest withSecurity(DownloadReportSecurity security) {
        this.security = security;
        return this;
    }
}