package openapisdk.models.operations;



public class ExportPackagesRequest {
    public ExportPackagesQueryParams queryParams;
    public ExportPackagesRequest withQueryParams(ExportPackagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportPackagesSecurity security;
    public ExportPackagesRequest withSecurity(ExportPackagesSecurity security) {
        this.security = security;
        return this;
    }
}