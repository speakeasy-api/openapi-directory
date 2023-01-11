package openapisdk.models.operations;



public class DcimDeviceTypesReadResponse {
    public String contentType;
    public DcimDeviceTypesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceType deviceType;
    public DcimDeviceTypesReadResponse withDeviceType(openapisdk.models.shared.DeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceTypesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}