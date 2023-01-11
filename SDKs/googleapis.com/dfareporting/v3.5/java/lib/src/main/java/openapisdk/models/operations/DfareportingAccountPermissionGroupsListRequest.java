package openapisdk.models.operations;



public class DfareportingAccountPermissionGroupsListRequest {
    public DfareportingAccountPermissionGroupsListPathParams pathParams;
    public DfareportingAccountPermissionGroupsListRequest withPathParams(DfareportingAccountPermissionGroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountPermissionGroupsListQueryParams queryParams;
    public DfareportingAccountPermissionGroupsListRequest withQueryParams(DfareportingAccountPermissionGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAccountPermissionGroupsListSecurity security;
    public DfareportingAccountPermissionGroupsListRequest withSecurity(DfareportingAccountPermissionGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}