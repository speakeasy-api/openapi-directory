package openapisdk.models.operations;



public class DfareportingUserRolePermissionGroupsListRequest {
    public DfareportingUserRolePermissionGroupsListPathParams pathParams;
    public DfareportingUserRolePermissionGroupsListRequest withPathParams(DfareportingUserRolePermissionGroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingUserRolePermissionGroupsListQueryParams queryParams;
    public DfareportingUserRolePermissionGroupsListRequest withQueryParams(DfareportingUserRolePermissionGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingUserRolePermissionGroupsListSecurity security;
    public DfareportingUserRolePermissionGroupsListRequest withSecurity(DfareportingUserRolePermissionGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}