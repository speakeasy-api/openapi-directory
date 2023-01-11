package openapisdk.models.operations;



public class DcimRackGroupsUpdateResponse {
    public String contentType;
    public DcimRackGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackGroup rackGroup;
    public DcimRackGroupsUpdateResponse withRackGroup(openapisdk.models.shared.RackGroup rackGroup) {
        this.rackGroup = rackGroup;
        return this;
    }
    public Long statusCode;
    public DcimRackGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}