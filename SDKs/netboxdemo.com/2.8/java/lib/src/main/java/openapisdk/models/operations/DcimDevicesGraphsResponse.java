package openapisdk.models.operations;



public class DcimDevicesGraphsResponse {
    public String contentType;
    public DcimDevicesGraphsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext;
    public DcimDevicesGraphsResponse withDeviceWithConfigContext(openapisdk.models.shared.DeviceWithConfigContext deviceWithConfigContext) {
        this.deviceWithConfigContext = deviceWithConfigContext;
        return this;
    }
    public Long statusCode;
    public DcimDevicesGraphsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}