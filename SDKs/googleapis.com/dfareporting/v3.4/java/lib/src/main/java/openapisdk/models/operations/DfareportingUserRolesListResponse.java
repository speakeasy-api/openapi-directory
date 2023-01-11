package openapisdk.models.operations;



public class DfareportingUserRolesListResponse {
    public String contentType;
    public DfareportingUserRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRolesListResponse userRolesListResponse;
    public DfareportingUserRolesListResponse withUserRolesListResponse(openapisdk.models.shared.UserRolesListResponse userRolesListResponse) {
        this.userRolesListResponse = userRolesListResponse;
        return this;
    }
}