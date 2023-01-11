package openapisdk.models.operations;



public class ExportSitesJsonlRequest {
    public ExportSitesJsonlQueryParams queryParams;
    public ExportSitesJsonlRequest withQueryParams(ExportSitesJsonlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportSitesJsonlSecurity security;
    public ExportSitesJsonlRequest withSecurity(ExportSitesJsonlSecurity security) {
        this.security = security;
        return this;
    }
}