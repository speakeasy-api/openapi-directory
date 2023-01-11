package openapisdk.models.operations;



public class DrivePermissionsListRequest {
    public DrivePermissionsListPathParams pathParams;
    public DrivePermissionsListRequest withPathParams(DrivePermissionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePermissionsListQueryParams queryParams;
    public DrivePermissionsListRequest withQueryParams(DrivePermissionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DrivePermissionsListSecurity security;
    public DrivePermissionsListRequest withSecurity(DrivePermissionsListSecurity security) {
        this.security = security;
        return this;
    }
}