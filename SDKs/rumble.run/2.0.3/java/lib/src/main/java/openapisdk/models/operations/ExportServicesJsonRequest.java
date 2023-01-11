package openapisdk.models.operations;



public class ExportServicesJsonRequest {
    public ExportServicesJsonQueryParams queryParams;
    public ExportServicesJsonRequest withQueryParams(ExportServicesJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportServicesJsonSecurity security;
    public ExportServicesJsonRequest withSecurity(ExportServicesJsonSecurity security) {
        this.security = security;
        return this;
    }
}