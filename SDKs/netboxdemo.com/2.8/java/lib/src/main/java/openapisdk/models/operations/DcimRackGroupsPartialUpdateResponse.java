package openapisdk.models.operations;



public class DcimRackGroupsPartialUpdateResponse {
    public String contentType;
    public DcimRackGroupsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackGroup rackGroup;
    public DcimRackGroupsPartialUpdateResponse withRackGroup(openapisdk.models.shared.RackGroup rackGroup) {
        this.rackGroup = rackGroup;
        return this;
    }
    public Long statusCode;
    public DcimRackGroupsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}