package openapisdk.models.operations;



public class DcimInterfacesReadResponse {
    public String contentType;
    public DcimInterfacesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceInterface deviceInterface;
    public DcimInterfacesReadResponse withDeviceInterface(openapisdk.models.shared.DeviceInterface deviceInterface) {
        this.deviceInterface = deviceInterface;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}