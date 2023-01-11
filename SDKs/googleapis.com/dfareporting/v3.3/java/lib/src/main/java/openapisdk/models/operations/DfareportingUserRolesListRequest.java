package openapisdk.models.operations;



public class DfareportingUserRolesListRequest {
    public DfareportingUserRolesListPathParams pathParams;
    public DfareportingUserRolesListRequest withPathParams(DfareportingUserRolesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingUserRolesListQueryParams queryParams;
    public DfareportingUserRolesListRequest withQueryParams(DfareportingUserRolesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingUserRolesListSecurity security;
    public DfareportingUserRolesListRequest withSecurity(DfareportingUserRolesListSecurity security) {
        this.security = security;
        return this;
    }
}