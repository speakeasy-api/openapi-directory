package openapisdk.models.operations;



public class ExportSystemPackagesRequest {
    public ExportSystemPackagesPathParams pathParams;
    public ExportSystemPackagesRequest withPathParams(ExportSystemPackagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportSystemPackagesQueryParams queryParams;
    public ExportSystemPackagesRequest withQueryParams(ExportSystemPackagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportSystemPackagesSecurity security;
    public ExportSystemPackagesRequest withSecurity(ExportSystemPackagesSecurity security) {
        this.security = security;
        return this;
    }
}