package openapisdk.models.operations;



public class DcimInterfacesTraceResponse {
    public String contentType;
    public DcimInterfacesTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceInterface deviceInterface;
    public DcimInterfacesTraceResponse withDeviceInterface(openapisdk.models.shared.DeviceInterface deviceInterface) {
        this.deviceInterface = deviceInterface;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}