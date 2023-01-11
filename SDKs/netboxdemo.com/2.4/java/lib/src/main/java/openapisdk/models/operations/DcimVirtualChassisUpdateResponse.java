package openapisdk.models.operations;



public class DcimVirtualChassisUpdateResponse {
    public String contentType;
    public DcimVirtualChassisUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimVirtualChassisUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualChassis virtualChassis;
    public DcimVirtualChassisUpdateResponse withVirtualChassis(openapisdk.models.shared.VirtualChassis virtualChassis) {
        this.virtualChassis = virtualChassis;
        return this;
    }
}