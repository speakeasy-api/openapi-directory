package openapisdk.models.operations;



public class DcimInterfacesCreateResponse {
    public String contentType;
    public DcimInterfacesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceInterface deviceInterface;
    public DcimInterfacesCreateResponse withDeviceInterface(openapisdk.models.shared.DeviceInterface deviceInterface) {
        this.deviceInterface = deviceInterface;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}