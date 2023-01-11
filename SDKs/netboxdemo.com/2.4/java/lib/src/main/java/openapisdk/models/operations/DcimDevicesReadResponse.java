package openapisdk.models.operations;



public class DcimDevicesReadResponse {
    public String contentType;
    public DcimDevicesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext;
    public DcimDevicesReadResponse withDeviceWithConfigContext(openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext) {
        this.deviceWithConfigContext = deviceWithConfigContext;
        return this;
    }
    public Long statusCode;
    public DcimDevicesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}