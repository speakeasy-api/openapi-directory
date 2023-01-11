package openapisdk.models.operations;



public class DfareportingAccountPermissionsListResponse {
    public openapisdk.models.shared.AccountPermissionsListResponse accountPermissionsListResponse;
    public DfareportingAccountPermissionsListResponse withAccountPermissionsListResponse(openapisdk.models.shared.AccountPermissionsListResponse accountPermissionsListResponse) {
        this.accountPermissionsListResponse = accountPermissionsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAccountPermissionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountPermissionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}