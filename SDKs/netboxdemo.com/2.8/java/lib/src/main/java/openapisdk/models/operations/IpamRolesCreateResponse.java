package openapisdk.models.operations;



public class IpamRolesCreateResponse {
    public String contentType;
    public IpamRolesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Role role;
    public IpamRolesCreateResponse withRole(openapisdk.models.shared.Role role) {
        this.role = role;
        return this;
    }
    public Long statusCode;
    public IpamRolesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}