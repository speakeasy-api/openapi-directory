package openapisdk.models.operations;



public class DcimDeviceBaysUpdateResponse {
    public String contentType;
    public DcimDeviceBaysUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBay deviceBay;
    public DcimDeviceBaysUpdateResponse withDeviceBay(openapisdk.models.shared.DeviceBay deviceBay) {
        this.deviceBay = deviceBay;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBaysUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}