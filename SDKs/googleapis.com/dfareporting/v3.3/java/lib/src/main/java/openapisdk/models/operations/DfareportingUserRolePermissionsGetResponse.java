package openapisdk.models.operations;



public class DfareportingUserRolePermissionsGetResponse {
    public String contentType;
    public DfareportingUserRolePermissionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolePermissionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRolePermission userRolePermission;
    public DfareportingUserRolePermissionsGetResponse withUserRolePermission(openapisdk.models.shared.UserRolePermission userRolePermission) {
        this.userRolePermission = userRolePermission;
        return this;
    }
}