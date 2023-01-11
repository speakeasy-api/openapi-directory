package openapisdk.models.operations;



public class DcimVirtualChassisReadResponse {
    public String contentType;
    public DcimVirtualChassisReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimVirtualChassisReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualChassis virtualChassis;
    public DcimVirtualChassisReadResponse withVirtualChassis(openapisdk.models.shared.VirtualChassis virtualChassis) {
        this.virtualChassis = virtualChassis;
        return this;
    }
}