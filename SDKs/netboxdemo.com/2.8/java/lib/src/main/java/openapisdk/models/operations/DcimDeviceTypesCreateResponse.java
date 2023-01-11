package openapisdk.models.operations;



public class DcimDeviceTypesCreateResponse {
    public String contentType;
    public DcimDeviceTypesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceType deviceType;
    public DcimDeviceTypesCreateResponse withDeviceType(openapisdk.models.shared.DeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceTypesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}