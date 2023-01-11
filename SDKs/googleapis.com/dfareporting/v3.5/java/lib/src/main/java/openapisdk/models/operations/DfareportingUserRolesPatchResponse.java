package openapisdk.models.operations;



public class DfareportingUserRolesPatchResponse {
    public String contentType;
    public DfareportingUserRolesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRole userRole;
    public DfareportingUserRolesPatchResponse withUserRole(openapisdk.models.shared.UserRole userRole) {
        this.userRole = userRole;
        return this;
    }
}