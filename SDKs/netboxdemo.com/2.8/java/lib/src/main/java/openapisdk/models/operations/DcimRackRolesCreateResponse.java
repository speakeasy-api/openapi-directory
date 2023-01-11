package openapisdk.models.operations;



public class DcimRackRolesCreateResponse {
    public String contentType;
    public DcimRackRolesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackRole rackRole;
    public DcimRackRolesCreateResponse withRackRole(openapisdk.models.shared.RackRole rackRole) {
        this.rackRole = rackRole;
        return this;
    }
    public Long statusCode;
    public DcimRackRolesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}