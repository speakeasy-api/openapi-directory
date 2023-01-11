package openapisdk.models.operations;



public class DcimConsolePortTemplatesListResponse {
    public String contentType;
    public DcimConsolePortTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimConsolePortTemplatesList200ApplicationJson dcimConsolePortTemplatesList200ApplicationJSONObject;
    public DcimConsolePortTemplatesListResponse withDcimConsolePortTemplatesList200ApplicationJsonObject(DcimConsolePortTemplatesList200ApplicationJson dcimConsolePortTemplatesList200ApplicationJSONObject) {
        this.dcimConsolePortTemplatesList200ApplicationJSONObject = dcimConsolePortTemplatesList200ApplicationJSONObject;
        return this;
    }
}