package openapisdk.models.operations;



public class DcimRackGroupsCreateResponse {
    public String contentType;
    public DcimRackGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackGroup rackGroup;
    public DcimRackGroupsCreateResponse withRackGroup(openapisdk.models.shared.RackGroup rackGroup) {
        this.rackGroup = rackGroup;
        return this;
    }
    public Long statusCode;
    public DcimRackGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}