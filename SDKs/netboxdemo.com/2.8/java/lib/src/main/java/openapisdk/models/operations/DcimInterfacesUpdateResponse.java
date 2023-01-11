package openapisdk.models.operations;



public class DcimInterfacesUpdateResponse {
    public String contentType;
    public DcimInterfacesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceInterface deviceInterface;
    public DcimInterfacesUpdateResponse withDeviceInterface(openapisdk.models.shared.DeviceInterface deviceInterface) {
        this.deviceInterface = deviceInterface;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}