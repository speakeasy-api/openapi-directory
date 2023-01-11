package openapisdk.models.operations;



public class DcimDevicesCreateResponse {
    public String contentType;
    public DcimDevicesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext;
    public DcimDevicesCreateResponse withDeviceWithConfigContext(openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext) {
        this.deviceWithConfigContext = deviceWithConfigContext;
        return this;
    }
    public Long statusCode;
    public DcimDevicesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}