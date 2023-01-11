package openapisdk.models.operations;



public class CancelReportRequest {
    public CancelReportPathParams pathParams;
    public CancelReportRequest withPathParams(CancelReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelReportSecurity security;
    public CancelReportRequest withSecurity(CancelReportSecurity security) {
        this.security = security;
        return this;
    }
}