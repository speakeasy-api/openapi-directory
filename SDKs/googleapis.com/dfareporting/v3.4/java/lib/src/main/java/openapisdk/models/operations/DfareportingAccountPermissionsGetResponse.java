package openapisdk.models.operations;



public class DfareportingAccountPermissionsGetResponse {
    public openapisdk.models.shared.AccountPermission accountPermission;
    public DfareportingAccountPermissionsGetResponse withAccountPermission(openapisdk.models.shared.AccountPermission accountPermission) {
        this.accountPermission = accountPermission;
        return this;
    }
    public String contentType;
    public DfareportingAccountPermissionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountPermissionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}