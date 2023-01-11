package openapisdk.models.operations;



public class DcimRackRolesReadResponse {
    public String contentType;
    public DcimRackRolesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackRole rackRole;
    public DcimRackRolesReadResponse withRackRole(openapisdk.models.shared.RackRole rackRole) {
        this.rackRole = rackRole;
        return this;
    }
    public Long statusCode;
    public DcimRackRolesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}