package openapisdk.models.operations;



public class DcimDeviceBayTemplatesReadResponse {
    public String contentType;
    public DcimDeviceBayTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate;
    public DcimDeviceBayTemplatesReadResponse withDeviceBayTemplate(openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate) {
        this.deviceBayTemplate = deviceBayTemplate;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBayTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}