package openapisdk.models.operations;



public class IpamRolesPartialUpdateResponse {
    public String contentType;
    public IpamRolesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Role role;
    public IpamRolesPartialUpdateResponse withRole(openapisdk.models.shared.Role role) {
        this.role = role;
        return this;
    }
    public Long statusCode;
    public IpamRolesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}