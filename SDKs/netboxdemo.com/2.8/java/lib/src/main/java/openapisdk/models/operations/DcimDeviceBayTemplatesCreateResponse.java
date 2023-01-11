package openapisdk.models.operations;



public class DcimDeviceBayTemplatesCreateResponse {
    public String contentType;
    public DcimDeviceBayTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate;
    public DcimDeviceBayTemplatesCreateResponse withDeviceBayTemplate(openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate) {
        this.deviceBayTemplate = deviceBayTemplate;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBayTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}