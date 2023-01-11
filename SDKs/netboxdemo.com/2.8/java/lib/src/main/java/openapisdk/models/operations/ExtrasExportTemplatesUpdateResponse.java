package openapisdk.models.operations;



public class ExtrasExportTemplatesUpdateResponse {
    public String contentType;
    public ExtrasExportTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportTemplate exportTemplate;
    public ExtrasExportTemplatesUpdateResponse withExportTemplate(openapisdk.models.shared.ExportTemplate exportTemplate) {
        this.exportTemplate = exportTemplate;
        return this;
    }
    public Long statusCode;
    public ExtrasExportTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}