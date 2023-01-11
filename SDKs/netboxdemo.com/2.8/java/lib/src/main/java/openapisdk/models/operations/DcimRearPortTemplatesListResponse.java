package openapisdk.models.operations;



public class DcimRearPortTemplatesListResponse {
    public String contentType;
    public DcimRearPortTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimRearPortTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimRearPortTemplatesList200ApplicationJson dcimRearPortTemplatesList200ApplicationJSONObject;
    public DcimRearPortTemplatesListResponse withDcimRearPortTemplatesList200ApplicationJsonObject(DcimRearPortTemplatesList200ApplicationJson dcimRearPortTemplatesList200ApplicationJSONObject) {
        this.dcimRearPortTemplatesList200ApplicationJSONObject = dcimRearPortTemplatesList200ApplicationJSONObject;
        return this;
    }
}