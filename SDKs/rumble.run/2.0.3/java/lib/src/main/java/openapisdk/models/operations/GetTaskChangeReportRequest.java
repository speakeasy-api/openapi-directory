package openapisdk.models.operations;



public class GetTaskChangeReportRequest {
    public GetTaskChangeReportPathParams pathParams;
    public GetTaskChangeReportRequest withPathParams(GetTaskChangeReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaskChangeReportSecurity security;
    public GetTaskChangeReportRequest withSecurity(GetTaskChangeReportSecurity security) {
        this.security = security;
        return this;
    }
}