package openapisdk.models.operations;



public class IpamRolesUpdateResponse {
    public String contentType;
    public IpamRolesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Role role;
    public IpamRolesUpdateResponse withRole(openapisdk.models.shared.Role role) {
        this.role = role;
        return this;
    }
    public Long statusCode;
    public IpamRolesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}