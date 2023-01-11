package openapisdk.models.operations;



public class ExtrasExportTemplatesReadResponse {
    public String contentType;
    public ExtrasExportTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportTemplate exportTemplate;
    public ExtrasExportTemplatesReadResponse withExportTemplate(openapisdk.models.shared.ExportTemplate exportTemplate) {
        this.exportTemplate = exportTemplate;
        return this;
    }
    public Long statusCode;
    public ExtrasExportTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}