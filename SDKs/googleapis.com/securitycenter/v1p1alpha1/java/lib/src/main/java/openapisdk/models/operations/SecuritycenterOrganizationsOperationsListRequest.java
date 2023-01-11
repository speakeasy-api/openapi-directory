package openapisdk.models.operations;



public class SecuritycenterOrganizationsOperationsListRequest {
    public SecuritycenterOrganizationsOperationsListPathParams pathParams;
    public SecuritycenterOrganizationsOperationsListRequest withPathParams(SecuritycenterOrganizationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsOperationsListQueryParams queryParams;
    public SecuritycenterOrganizationsOperationsListRequest withQueryParams(SecuritycenterOrganizationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecuritycenterOrganizationsOperationsListSecurity security;
    public SecuritycenterOrganizationsOperationsListRequest withSecurity(SecuritycenterOrganizationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}