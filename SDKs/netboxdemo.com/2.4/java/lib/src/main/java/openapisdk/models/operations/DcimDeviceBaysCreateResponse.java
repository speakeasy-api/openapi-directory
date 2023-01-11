package openapisdk.models.operations;



public class DcimDeviceBaysCreateResponse {
    public String contentType;
    public DcimDeviceBaysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBay deviceBay;
    public DcimDeviceBaysCreateResponse withDeviceBay(openapisdk.models.shared.DeviceBay deviceBay) {
        this.deviceBay = deviceBay;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBaysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}