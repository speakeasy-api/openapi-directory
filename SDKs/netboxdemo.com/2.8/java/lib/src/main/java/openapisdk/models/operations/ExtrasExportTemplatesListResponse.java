package openapisdk.models.operations;



public class ExtrasExportTemplatesListResponse {
    public String contentType;
    public ExtrasExportTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasExportTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasExportTemplatesList200ApplicationJson extrasExportTemplatesList200ApplicationJSONObject;
    public ExtrasExportTemplatesListResponse withExtrasExportTemplatesList200ApplicationJsonObject(ExtrasExportTemplatesList200ApplicationJson extrasExportTemplatesList200ApplicationJSONObject) {
        this.extrasExportTemplatesList200ApplicationJSONObject = extrasExportTemplatesList200ApplicationJSONObject;
        return this;
    }
}