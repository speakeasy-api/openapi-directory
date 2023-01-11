package openapisdk.models.operations;



public class DcimDevicesPartialUpdateResponse {
    public String contentType;
    public DcimDevicesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext;
    public DcimDevicesPartialUpdateResponse withDeviceWithConfigContext(openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext) {
        this.deviceWithConfigContext = deviceWithConfigContext;
        return this;
    }
    public Long statusCode;
    public DcimDevicesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}