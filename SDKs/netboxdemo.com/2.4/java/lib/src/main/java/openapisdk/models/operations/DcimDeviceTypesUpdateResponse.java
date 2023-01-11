package openapisdk.models.operations;



public class DcimDeviceTypesUpdateResponse {
    public String contentType;
    public DcimDeviceTypesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceType deviceType;
    public DcimDeviceTypesUpdateResponse withDeviceType(openapisdk.models.shared.DeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceTypesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}