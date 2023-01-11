package openapisdk.models.operations;



public class DrivePermissionsCreateResponse {
    public String contentType;
    public DrivePermissionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Permission permission;
    public DrivePermissionsCreateResponse withPermission(openapisdk.models.shared.Permission permission) {
        this.permission = permission;
        return this;
    }
    public Long statusCode;
    public DrivePermissionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}