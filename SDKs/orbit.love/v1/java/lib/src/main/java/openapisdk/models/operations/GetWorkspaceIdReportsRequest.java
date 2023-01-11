package openapisdk.models.operations;



public class GetWorkspaceIdReportsRequest {
    public GetWorkspaceIdReportsPathParams pathParams;
    public GetWorkspaceIdReportsRequest withPathParams(GetWorkspaceIdReportsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspaceIdReportsQueryParams queryParams;
    public GetWorkspaceIdReportsRequest withQueryParams(GetWorkspaceIdReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkspaceIdReportsSecurity security;
    public GetWorkspaceIdReportsRequest withSecurity(GetWorkspaceIdReportsSecurity security) {
        this.security = security;
        return this;
    }
}