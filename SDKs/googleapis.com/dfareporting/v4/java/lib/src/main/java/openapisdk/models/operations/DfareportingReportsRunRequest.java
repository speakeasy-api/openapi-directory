package openapisdk.models.operations;



public class DfareportingReportsRunRequest {
    public DfareportingReportsRunPathParams pathParams;
    public DfareportingReportsRunRequest withPathParams(DfareportingReportsRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsRunQueryParams queryParams;
    public DfareportingReportsRunRequest withQueryParams(DfareportingReportsRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingReportsRunSecurity security;
    public DfareportingReportsRunRequest withSecurity(DfareportingReportsRunSecurity security) {
        this.security = security;
        return this;
    }
}