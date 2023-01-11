package openapisdk.models.operations;



public class DcimDeviceBayTemplatesListResponse {
    public String contentType;
    public DcimDeviceBayTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBayTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimDeviceBayTemplatesList200ApplicationJson dcimDeviceBayTemplatesList200ApplicationJSONObject;
    public DcimDeviceBayTemplatesListResponse withDcimDeviceBayTemplatesList200ApplicationJsonObject(DcimDeviceBayTemplatesList200ApplicationJson dcimDeviceBayTemplatesList200ApplicationJSONObject) {
        this.dcimDeviceBayTemplatesList200ApplicationJSONObject = dcimDeviceBayTemplatesList200ApplicationJSONObject;
        return this;
    }
}