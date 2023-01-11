package openapisdk.models.operations;



public class DrivePermissionsInsertResponse {
    public String contentType;
    public DrivePermissionsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Permission permission;
    public DrivePermissionsInsertResponse withPermission(openapisdk.models.shared.Permission permission) {
        this.permission = permission;
        return this;
    }
    public Long statusCode;
    public DrivePermissionsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}