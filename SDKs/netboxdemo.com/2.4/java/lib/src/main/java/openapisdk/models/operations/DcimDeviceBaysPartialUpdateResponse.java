package openapisdk.models.operations;



public class DcimDeviceBaysPartialUpdateResponse {
    public String contentType;
    public DcimDeviceBaysPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBay deviceBay;
    public DcimDeviceBaysPartialUpdateResponse withDeviceBay(openapisdk.models.shared.DeviceBay deviceBay) {
        this.deviceBay = deviceBay;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBaysPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}