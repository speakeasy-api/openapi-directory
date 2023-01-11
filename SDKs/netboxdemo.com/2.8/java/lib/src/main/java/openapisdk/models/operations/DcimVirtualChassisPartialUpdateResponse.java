package openapisdk.models.operations;



public class DcimVirtualChassisPartialUpdateResponse {
    public String contentType;
    public DcimVirtualChassisPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimVirtualChassisPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualChassis virtualChassis;
    public DcimVirtualChassisPartialUpdateResponse withVirtualChassis(openapisdk.models.shared.VirtualChassis virtualChassis) {
        this.virtualChassis = virtualChassis;
        return this;
    }
}