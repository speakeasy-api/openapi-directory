package openapisdk.models.operations;



public class DfareportingDirectorySitesGetRequest {
    public DfareportingDirectorySitesGetPathParams pathParams;
    public DfareportingDirectorySitesGetRequest withPathParams(DfareportingDirectorySitesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingDirectorySitesGetQueryParams queryParams;
    public DfareportingDirectorySitesGetRequest withQueryParams(DfareportingDirectorySitesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingDirectorySitesGetSecurity security;
    public DfareportingDirectorySitesGetRequest withSecurity(DfareportingDirectorySitesGetSecurity security) {
        this.security = security;
        return this;
    }
}