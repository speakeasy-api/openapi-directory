package openapisdk.models.operations;



public class ExtrasExportTemplatesPartialUpdateResponse {
    public String contentType;
    public ExtrasExportTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportTemplate exportTemplate;
    public ExtrasExportTemplatesPartialUpdateResponse withExportTemplate(openapisdk.models.shared.ExportTemplate exportTemplate) {
        this.exportTemplate = exportTemplate;
        return this;
    }
    public Long statusCode;
    public ExtrasExportTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}