package openapisdk.models.operations;



public class DfareportingUserRolesInsertResponse {
    public String contentType;
    public DfareportingUserRolesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserRolesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRole userRole;
    public DfareportingUserRolesInsertResponse withUserRole(openapisdk.models.shared.UserRole userRole) {
        this.userRole = userRole;
        return this;
    }
}