package openapisdk.models.operations;



public class DcimRackRolesPartialUpdateResponse {
    public String contentType;
    public DcimRackRolesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackRole rackRole;
    public DcimRackRolesPartialUpdateResponse withRackRole(openapisdk.models.shared.RackRole rackRole) {
        this.rackRole = rackRole;
        return this;
    }
    public Long statusCode;
    public DcimRackRolesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}