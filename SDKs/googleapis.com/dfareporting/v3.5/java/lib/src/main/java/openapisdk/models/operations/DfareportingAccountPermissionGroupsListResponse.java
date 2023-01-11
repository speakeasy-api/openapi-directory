package openapisdk.models.operations;



public class DfareportingAccountPermissionGroupsListResponse {
    public openapisdk.models.shared.AccountPermissionGroupsListResponse accountPermissionGroupsListResponse;
    public DfareportingAccountPermissionGroupsListResponse withAccountPermissionGroupsListResponse(openapisdk.models.shared.AccountPermissionGroupsListResponse accountPermissionGroupsListResponse) {
        this.accountPermissionGroupsListResponse = accountPermissionGroupsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAccountPermissionGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountPermissionGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}