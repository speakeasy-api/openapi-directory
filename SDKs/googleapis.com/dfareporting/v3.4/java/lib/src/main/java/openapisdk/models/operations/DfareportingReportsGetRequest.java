package openapisdk.models.operations;



public class DfareportingReportsGetRequest {
    public DfareportingReportsGetPathParams pathParams;
    public DfareportingReportsGetRequest withPathParams(DfareportingReportsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsGetQueryParams queryParams;
    public DfareportingReportsGetRequest withQueryParams(DfareportingReportsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingReportsGetSecurity security;
    public DfareportingReportsGetRequest withSecurity(DfareportingReportsGetSecurity security) {
        this.security = security;
        return this;
    }
}