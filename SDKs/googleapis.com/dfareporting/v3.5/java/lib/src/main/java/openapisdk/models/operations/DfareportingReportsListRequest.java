package openapisdk.models.operations;



public class DfareportingReportsListRequest {
    public DfareportingReportsListPathParams pathParams;
    public DfareportingReportsListRequest withPathParams(DfareportingReportsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsListQueryParams queryParams;
    public DfareportingReportsListRequest withQueryParams(DfareportingReportsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingReportsListSecurity security;
    public DfareportingReportsListRequest withSecurity(DfareportingReportsListSecurity security) {
        this.security = security;
        return this;
    }
}