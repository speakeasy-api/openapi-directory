package openapisdk.models.operations;



public class DcimDeviceBayTemplatesUpdateResponse {
    public String contentType;
    public DcimDeviceBayTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate;
    public DcimDeviceBayTemplatesUpdateResponse withDeviceBayTemplate(openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate) {
        this.deviceBayTemplate = deviceBayTemplate;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBayTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}