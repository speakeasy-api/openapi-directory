package openapisdk.models.operations;



public class DfareportingRegionsListRequest {
    public DfareportingRegionsListPathParams pathParams;
    public DfareportingRegionsListRequest withPathParams(DfareportingRegionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingRegionsListQueryParams queryParams;
    public DfareportingRegionsListRequest withQueryParams(DfareportingRegionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingRegionsListSecurity security;
    public DfareportingRegionsListRequest withSecurity(DfareportingRegionsListSecurity security) {
        this.security = security;
        return this;
    }
}