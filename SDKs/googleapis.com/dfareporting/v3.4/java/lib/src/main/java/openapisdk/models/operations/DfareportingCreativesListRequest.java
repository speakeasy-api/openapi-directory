package openapisdk.models.operations;



public class DfareportingCreativesListRequest {
    public DfareportingCreativesListPathParams pathParams;
    public DfareportingCreativesListRequest withPathParams(DfareportingCreativesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativesListQueryParams queryParams;
    public DfareportingCreativesListRequest withQueryParams(DfareportingCreativesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingCreativesListSecurity security;
    public DfareportingCreativesListRequest withSecurity(DfareportingCreativesListSecurity security) {
        this.security = security;
        return this;
    }
}