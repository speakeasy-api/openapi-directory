package openapisdk.models.operations;



public class DcimDeviceTypesPartialUpdateResponse {
    public String contentType;
    public DcimDeviceTypesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceType deviceType;
    public DcimDeviceTypesPartialUpdateResponse withDeviceType(openapisdk.models.shared.DeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceTypesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}