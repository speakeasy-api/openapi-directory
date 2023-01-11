package openapisdk.models.operations;



public class DfareportingUserRolePermissionsListResponse {
    public String contentType;
    public DfareportingUserRolePermissionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolePermissionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRolePermissionsListResponse userRolePermissionsListResponse;
    public DfareportingUserRolePermissionsListResponse withUserRolePermissionsListResponse(openapisdk.models.shared.UserRolePermissionsListResponse userRolePermissionsListResponse) {
        this.userRolePermissionsListResponse = userRolePermissionsListResponse;
        return this;
    }
}