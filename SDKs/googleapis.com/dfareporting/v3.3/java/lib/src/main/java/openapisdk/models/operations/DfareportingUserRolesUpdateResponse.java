package openapisdk.models.operations;



public class DfareportingUserRolesUpdateResponse {
    public String contentType;
    public DfareportingUserRolesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRole userRole;
    public DfareportingUserRolesUpdateResponse withUserRole(openapisdk.models.shared.UserRole userRole) {
        this.userRole = userRole;
        return this;
    }
}