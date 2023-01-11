package openapisdk.models.operations;



public class DrivePermissionsPatchResponse {
    public String contentType;
    public DrivePermissionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Permission permission;
    public DrivePermissionsPatchResponse withPermission(openapisdk.models.shared.Permission permission) {
        this.permission = permission;
        return this;
    }
    public Long statusCode;
    public DrivePermissionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}