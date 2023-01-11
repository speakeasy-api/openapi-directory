package openapisdk.models.operations;



public class DfareportingUserRolePermissionGroupsListResponse {
    public String contentType;
    public DfareportingUserRolePermissionGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolePermissionGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRolePermissionGroupsListResponse userRolePermissionGroupsListResponse;
    public DfareportingUserRolePermissionGroupsListResponse withUserRolePermissionGroupsListResponse(openapisdk.models.shared.UserRolePermissionGroupsListResponse userRolePermissionGroupsListResponse) {
        this.userRolePermissionGroupsListResponse = userRolePermissionGroupsListResponse;
        return this;
    }
}