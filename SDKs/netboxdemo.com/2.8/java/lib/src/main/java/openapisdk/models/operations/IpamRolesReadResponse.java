package openapisdk.models.operations;



public class IpamRolesReadResponse {
    public String contentType;
    public IpamRolesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Role role;
    public IpamRolesReadResponse withRole(openapisdk.models.shared.Role role) {
        this.role = role;
        return this;
    }
    public Long statusCode;
    public IpamRolesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}