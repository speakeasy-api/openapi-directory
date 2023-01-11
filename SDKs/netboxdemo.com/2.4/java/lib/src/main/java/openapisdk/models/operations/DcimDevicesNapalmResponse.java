package openapisdk.models.operations;



public class DcimDevicesNapalmResponse {
    public String contentType;
    public DcimDevicesNapalmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public DcimDevicesNapalmResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public DcimDevicesNapalmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}