package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesFindingsListRequest {
    public SecuritycenterOrganizationsSourcesFindingsListPathParams pathParams;
    public SecuritycenterOrganizationsSourcesFindingsListRequest withPathParams(SecuritycenterOrganizationsSourcesFindingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsListQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesFindingsListRequest withQueryParams(SecuritycenterOrganizationsSourcesFindingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsListSecurity security;
    public SecuritycenterOrganizationsSourcesFindingsListRequest withSecurity(SecuritycenterOrganizationsSourcesFindingsListSecurity security) {
        this.security = security;
        return this;
    }
}