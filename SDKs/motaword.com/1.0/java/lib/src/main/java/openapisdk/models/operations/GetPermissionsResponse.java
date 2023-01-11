package openapisdk.models.operations;



public class GetPermissionsResponse {
    public String contentType;
    public GetPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionList permissionList;
    public GetPermissionsResponse withPermissionList(openapisdk.models.shared.PermissionList permissionList) {
        this.permissionList = permissionList;
        return this;
    }
    public Long statusCode;
    public GetPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}