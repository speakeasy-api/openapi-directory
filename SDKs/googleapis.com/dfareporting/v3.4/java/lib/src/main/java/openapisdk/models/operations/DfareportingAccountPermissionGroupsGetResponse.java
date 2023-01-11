package openapisdk.models.operations;



public class DfareportingAccountPermissionGroupsGetResponse {
    public openapisdk.models.shared.AccountPermissionGroup accountPermissionGroup;
    public DfareportingAccountPermissionGroupsGetResponse withAccountPermissionGroup(openapisdk.models.shared.AccountPermissionGroup accountPermissionGroup) {
        this.accountPermissionGroup = accountPermissionGroup;
        return this;
    }
    public String contentType;
    public DfareportingAccountPermissionGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountPermissionGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}