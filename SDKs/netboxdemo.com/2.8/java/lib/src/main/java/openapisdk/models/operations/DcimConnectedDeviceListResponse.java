package openapisdk.models.operations;



public class DcimConnectedDeviceListResponse {
    public String contentType;
    public DcimConnectedDeviceListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public DcimConnectedDeviceListResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public DcimConnectedDeviceListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}