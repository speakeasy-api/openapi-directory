package openapisdk.models.operations;



public class DfareportingUserRolePermissionGroupsGetResponse {
    public String contentType;
    public DfareportingUserRolePermissionGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolePermissionGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRolePermissionGroup userRolePermissionGroup;
    public DfareportingUserRolePermissionGroupsGetResponse withUserRolePermissionGroup(openapisdk.models.shared.UserRolePermissionGroup userRolePermissionGroup) {
        this.userRolePermissionGroup = userRolePermissionGroup;
        return this;
    }
}