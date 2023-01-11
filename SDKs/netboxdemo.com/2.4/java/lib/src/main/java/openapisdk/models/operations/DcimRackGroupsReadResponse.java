package openapisdk.models.operations;



public class DcimRackGroupsReadResponse {
    public String contentType;
    public DcimRackGroupsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackGroup rackGroup;
    public DcimRackGroupsReadResponse withRackGroup(openapisdk.models.shared.RackGroup rackGroup) {
        this.rackGroup = rackGroup;
        return this;
    }
    public Long statusCode;
    public DcimRackGroupsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}