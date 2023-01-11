package openapisdk.models.operations;



public class ExportPackageSystemsRequest {
    public ExportPackageSystemsPathParams pathParams;
    public ExportPackageSystemsRequest withPathParams(ExportPackageSystemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportPackageSystemsQueryParams queryParams;
    public ExportPackageSystemsRequest withQueryParams(ExportPackageSystemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportPackageSystemsSecurity security;
    public ExportPackageSystemsRequest withSecurity(ExportPackageSystemsSecurity security) {
        this.security = security;
        return this;
    }
}