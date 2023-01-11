package openapisdk.models.operations;



public class ExtrasExportTemplatesCreateResponse {
    public String contentType;
    public ExtrasExportTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportTemplate exportTemplate;
    public ExtrasExportTemplatesCreateResponse withExportTemplate(openapisdk.models.shared.ExportTemplate exportTemplate) {
        this.exportTemplate = exportTemplate;
        return this;
    }
    public Long statusCode;
    public ExtrasExportTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}