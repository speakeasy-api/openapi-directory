package openapisdk.models.operations;



public class DrivePermissionsGetIdForEmailResponse {
    public String contentType;
    public DrivePermissionsGetIdForEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionId permissionId;
    public DrivePermissionsGetIdForEmailResponse withPermissionId(openapisdk.models.shared.PermissionId permissionId) {
        this.permissionId = permissionId;
        return this;
    }
    public Long statusCode;
    public DrivePermissionsGetIdForEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}