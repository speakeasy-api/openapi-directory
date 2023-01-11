package openapisdk.models.operations;



public class DcimVirtualChassisCreateResponse {
    public String contentType;
    public DcimVirtualChassisCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimVirtualChassisCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualChassis virtualChassis;
    public DcimVirtualChassisCreateResponse withVirtualChassis(openapisdk.models.shared.VirtualChassis virtualChassis) {
        this.virtualChassis = virtualChassis;
        return this;
    }
}