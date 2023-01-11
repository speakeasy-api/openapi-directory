package openapisdk.models.operations;



public class ExportServicesJsonlRequest {
    public ExportServicesJsonlQueryParams queryParams;
    public ExportServicesJsonlRequest withQueryParams(ExportServicesJsonlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportServicesJsonlSecurity security;
    public ExportServicesJsonlRequest withSecurity(ExportServicesJsonlSecurity security) {
        this.security = security;
        return this;
    }
}