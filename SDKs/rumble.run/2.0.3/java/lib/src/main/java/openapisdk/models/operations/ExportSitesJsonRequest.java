package openapisdk.models.operations;



public class ExportSitesJsonRequest {
    public ExportSitesJsonQueryParams queryParams;
    public ExportSitesJsonRequest withQueryParams(ExportSitesJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportSitesJsonSecurity security;
    public ExportSitesJsonRequest withSecurity(ExportSitesJsonSecurity security) {
        this.security = security;
        return this;
    }
}