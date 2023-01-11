package openapisdk.models.operations;



public class DrivePermissionsListResponse {
    public String contentType;
    public DrivePermissionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionList permissionList;
    public DrivePermissionsListResponse withPermissionList(openapisdk.models.shared.PermissionList permissionList) {
        this.permissionList = permissionList;
        return this;
    }
    public Long statusCode;
    public DrivePermissionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}