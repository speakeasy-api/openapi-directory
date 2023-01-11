package openapisdk.models.operations;



public class ExportServicesCsvRequest {
    public ExportServicesCsvQueryParams queryParams;
    public ExportServicesCsvRequest withQueryParams(ExportServicesCsvQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportServicesCsvSecurity security;
    public ExportServicesCsvRequest withSecurity(ExportServicesCsvSecurity security) {
        this.security = security;
        return this;
    }
}