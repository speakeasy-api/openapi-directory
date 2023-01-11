package openapisdk.models.operations;



public class DcimInterfacesGraphsResponse {
    public String contentType;
    public DcimInterfacesGraphsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceInterface deviceInterface;
    public DcimInterfacesGraphsResponse withDeviceInterface(openapisdk.models.shared.DeviceInterface deviceInterface) {
        this.deviceInterface = deviceInterface;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesGraphsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}