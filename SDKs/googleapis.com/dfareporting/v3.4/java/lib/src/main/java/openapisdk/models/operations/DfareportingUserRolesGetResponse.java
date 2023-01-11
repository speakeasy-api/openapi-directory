package openapisdk.models.operations;



public class DfareportingUserRolesGetResponse {
    public String contentType;
    public DfareportingUserRolesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRole userRole;
    public DfareportingUserRolesGetResponse withUserRole(openapisdk.models.shared.UserRole userRole) {
        this.userRole = userRole;
        return this;
    }
}