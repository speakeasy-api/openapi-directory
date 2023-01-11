package openapisdk.models.operations;



public class GetUserPermissionsResponse {
    public String contentType;
    public GetUserPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionList permissionList;
    public GetUserPermissionsResponse withPermissionList(openapisdk.models.shared.PermissionList permissionList) {
        this.permissionList = permissionList;
        return this;
    }
    public Long statusCode;
    public GetUserPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}