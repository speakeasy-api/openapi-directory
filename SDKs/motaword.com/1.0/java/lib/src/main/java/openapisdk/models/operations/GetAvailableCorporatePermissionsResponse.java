package openapisdk.models.operations;



public class GetAvailableCorporatePermissionsResponse {
    public String contentType;
    public GetAvailableCorporatePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionList permissionList;
    public GetAvailableCorporatePermissionsResponse withPermissionList(openapisdk.models.shared.PermissionList permissionList) {
        this.permissionList = permissionList;
        return this;
    }
    public Long statusCode;
    public GetAvailableCorporatePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}