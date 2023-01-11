package openapisdk.models.operations;



public class DrivePermissionsDeleteRequest {
    public DrivePermissionsDeletePathParams pathParams;
    public DrivePermissionsDeleteRequest withPathParams(DrivePermissionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePermissionsDeleteQueryParams queryParams;
    public DrivePermissionsDeleteRequest withQueryParams(DrivePermissionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DrivePermissionsDeleteSecurity security;
    public DrivePermissionsDeleteRequest withSecurity(DrivePermissionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}