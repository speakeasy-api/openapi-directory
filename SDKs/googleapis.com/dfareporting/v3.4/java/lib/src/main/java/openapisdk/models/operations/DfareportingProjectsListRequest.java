package openapisdk.models.operations;



public class DfareportingProjectsListRequest {
    public DfareportingProjectsListPathParams pathParams;
    public DfareportingProjectsListRequest withPathParams(DfareportingProjectsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingProjectsListQueryParams queryParams;
    public DfareportingProjectsListRequest withQueryParams(DfareportingProjectsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingProjectsListSecurity security;
    public DfareportingProjectsListRequest withSecurity(DfareportingProjectsListSecurity security) {
        this.security = security;
        return this;
    }
}