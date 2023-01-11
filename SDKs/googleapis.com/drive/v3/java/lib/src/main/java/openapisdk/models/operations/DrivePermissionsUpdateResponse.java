package openapisdk.models.operations;



public class DrivePermissionsUpdateResponse {
    public String contentType;
    public DrivePermissionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Permission permission;
    public DrivePermissionsUpdateResponse withPermission(openapisdk.models.shared.Permission permission) {
        this.permission = permission;
        return this;
    }
    public Long statusCode;
    public DrivePermissionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}