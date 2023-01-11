package openapisdk.models.operations;



public class DfareportingReportsFilesListRequest {
    public DfareportingReportsFilesListPathParams pathParams;
    public DfareportingReportsFilesListRequest withPathParams(DfareportingReportsFilesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsFilesListQueryParams queryParams;
    public DfareportingReportsFilesListRequest withQueryParams(DfareportingReportsFilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingReportsFilesListSecurity security;
    public DfareportingReportsFilesListRequest withSecurity(DfareportingReportsFilesListSecurity security) {
        this.security = security;
        return this;
    }
}