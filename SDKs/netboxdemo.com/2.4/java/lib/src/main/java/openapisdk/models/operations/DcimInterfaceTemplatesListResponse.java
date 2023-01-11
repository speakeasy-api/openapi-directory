package openapisdk.models.operations;



public class DcimInterfaceTemplatesListResponse {
    public String contentType;
    public DcimInterfaceTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimInterfaceTemplatesList200ApplicationJson dcimInterfaceTemplatesList200ApplicationJSONObject;
    public DcimInterfaceTemplatesListResponse withDcimInterfaceTemplatesList200ApplicationJsonObject(DcimInterfaceTemplatesList200ApplicationJson dcimInterfaceTemplatesList200ApplicationJSONObject) {
        this.dcimInterfaceTemplatesList200ApplicationJSONObject = dcimInterfaceTemplatesList200ApplicationJSONObject;
        return this;
    }
}