package openapisdk.models.operations;



public class DcimDevicesPartialUpdateResponse {
    public String contentType;
    public DcimDevicesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public DcimDevicesPartialUpdateResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public DcimDevicesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}