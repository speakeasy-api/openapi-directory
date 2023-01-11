package openapisdk.models.operations;



public class DfareportingCitiesListRequest {
    public DfareportingCitiesListPathParams pathParams;
    public DfareportingCitiesListRequest withPathParams(DfareportingCitiesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCitiesListQueryParams queryParams;
    public DfareportingCitiesListRequest withQueryParams(DfareportingCitiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingCitiesListSecurity security;
    public DfareportingCitiesListRequest withSecurity(DfareportingCitiesListSecurity security) {
        this.security = security;
        return this;
    }
}