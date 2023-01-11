package openapisdk.models.operations;



public class DcimDeviceBaysReadResponse {
    public String contentType;
    public DcimDeviceBaysReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBay deviceBay;
    public DcimDeviceBaysReadResponse withDeviceBay(openapisdk.models.shared.DeviceBay deviceBay) {
        this.deviceBay = deviceBay;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBaysReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}