package openapisdk.models.operations;



public class DcimDeviceBayTemplatesPartialUpdateResponse {
    public String contentType;
    public DcimDeviceBayTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate;
    public DcimDeviceBayTemplatesPartialUpdateResponse withDeviceBayTemplate(openapisdk.models.shared.DeviceBayTemplate deviceBayTemplate) {
        this.deviceBayTemplate = deviceBayTemplate;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBayTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}