package openapisdk.models.operations;



public class DfareportingAccountPermissionsListRequest {
    public DfareportingAccountPermissionsListPathParams pathParams;
    public DfareportingAccountPermissionsListRequest withPathParams(DfareportingAccountPermissionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountPermissionsListQueryParams queryParams;
    public DfareportingAccountPermissionsListRequest withQueryParams(DfareportingAccountPermissionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAccountPermissionsListSecurity security;
    public DfareportingAccountPermissionsListRequest withSecurity(DfareportingAccountPermissionsListSecurity security) {
        this.security = security;
        return this;
    }
}