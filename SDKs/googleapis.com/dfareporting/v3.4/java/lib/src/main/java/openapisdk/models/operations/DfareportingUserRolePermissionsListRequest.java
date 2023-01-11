package openapisdk.models.operations;



public class DfareportingUserRolePermissionsListRequest {
    public DfareportingUserRolePermissionsListPathParams pathParams;
    public DfareportingUserRolePermissionsListRequest withPathParams(DfareportingUserRolePermissionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingUserRolePermissionsListQueryParams queryParams;
    public DfareportingUserRolePermissionsListRequest withQueryParams(DfareportingUserRolePermissionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingUserRolePermissionsListSecurity security;
    public DfareportingUserRolePermissionsListRequest withSecurity(DfareportingUserRolePermissionsListSecurity security) {
        this.security = security;
        return this;
    }
}