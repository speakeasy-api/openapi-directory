package openapisdk.models.operations;



public class DcimDevicesUpdateResponse {
    public String contentType;
    public DcimDevicesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext;
    public DcimDevicesUpdateResponse withDeviceWithConfigContext(openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext) {
        this.deviceWithConfigContext = deviceWithConfigContext;
        return this;
    }
    public Long statusCode;
    public DcimDevicesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}