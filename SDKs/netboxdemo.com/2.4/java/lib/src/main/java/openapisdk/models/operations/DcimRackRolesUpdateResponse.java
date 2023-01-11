package openapisdk.models.operations;



public class DcimRackRolesUpdateResponse {
    public String contentType;
    public DcimRackRolesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackRole rackRole;
    public DcimRackRolesUpdateResponse withRackRole(openapisdk.models.shared.RackRole rackRole) {
        this.rackRole = rackRole;
        return this;
    }
    public Long statusCode;
    public DcimRackRolesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}