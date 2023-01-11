package openapisdk.models.operations;



public class DataExporterTemplateRequest {
    public DataExporterTemplateQueryParams queryParams;
    public DataExporterTemplateRequest withQueryParams(DataExporterTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DataExporterTemplateSecurity security;
    public DataExporterTemplateRequest withSecurity(DataExporterTemplateSecurity security) {
        this.security = security;
        return this;
    }
}