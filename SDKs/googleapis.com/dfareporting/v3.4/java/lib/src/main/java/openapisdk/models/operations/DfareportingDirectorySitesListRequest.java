package openapisdk.models.operations;



public class DfareportingDirectorySitesListRequest {
    public DfareportingDirectorySitesListPathParams pathParams;
    public DfareportingDirectorySitesListRequest withPathParams(DfareportingDirectorySitesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingDirectorySitesListQueryParams queryParams;
    public DfareportingDirectorySitesListRequest withQueryParams(DfareportingDirectorySitesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingDirectorySitesListSecurity security;
    public DfareportingDirectorySitesListRequest withSecurity(DfareportingDirectorySitesListSecurity security) {
        this.security = security;
        return this;
    }
}