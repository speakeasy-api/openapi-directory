package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesListRequest {
    public SecuritycenterOrganizationsSourcesListPathParams pathParams;
    public SecuritycenterOrganizationsSourcesListRequest withPathParams(SecuritycenterOrganizationsSourcesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesListQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesListRequest withQueryParams(SecuritycenterOrganizationsSourcesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesListSecurity security;
    public SecuritycenterOrganizationsSourcesListRequest withSecurity(SecuritycenterOrganizationsSourcesListSecurity security) {
        this.security = security;
        return this;
    }
}