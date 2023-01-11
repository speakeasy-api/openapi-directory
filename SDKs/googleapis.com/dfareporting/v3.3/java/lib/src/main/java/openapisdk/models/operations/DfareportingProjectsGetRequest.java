package openapisdk.models.operations;



public class DfareportingProjectsGetRequest {
    public DfareportingProjectsGetPathParams pathParams;
    public DfareportingProjectsGetRequest withPathParams(DfareportingProjectsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingProjectsGetQueryParams queryParams;
    public DfareportingProjectsGetRequest withQueryParams(DfareportingProjectsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingProjectsGetSecurity security;
    public DfareportingProjectsGetRequest withSecurity(DfareportingProjectsGetSecurity security) {
        this.security = security;
        return this;
    }
}