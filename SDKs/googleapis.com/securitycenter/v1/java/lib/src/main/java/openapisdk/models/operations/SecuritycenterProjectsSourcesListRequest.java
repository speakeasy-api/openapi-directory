package openapisdk.models.operations;



public class SecuritycenterProjectsSourcesListRequest {
    public SecuritycenterProjectsSourcesListPathParams pathParams;
    public SecuritycenterProjectsSourcesListRequest withPathParams(SecuritycenterProjectsSourcesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsSourcesListQueryParams queryParams;
    public SecuritycenterProjectsSourcesListRequest withQueryParams(SecuritycenterProjectsSourcesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecuritycenterProjectsSourcesListSecurity security;
    public SecuritycenterProjectsSourcesListRequest withSecurity(SecuritycenterProjectsSourcesListSecurity security) {
        this.security = security;
        return this;
    }
}