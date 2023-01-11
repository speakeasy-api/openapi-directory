package openapisdk.models.operations;



public class IamProjectsRolesCreateResponse {
    public String contentType;
    public IamProjectsRolesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Role role;
    public IamProjectsRolesCreateResponse withRole(openapisdk.models.shared.Role role) {
        this.role = role;
        return this;
    }
    public Long statusCode;
    public IamProjectsRolesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}