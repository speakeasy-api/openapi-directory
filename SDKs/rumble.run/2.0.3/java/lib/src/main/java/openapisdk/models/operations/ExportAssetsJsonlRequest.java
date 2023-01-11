package openapisdk.models.operations;



public class ExportAssetsJsonlRequest {
    public ExportAssetsJsonlQueryParams queryParams;
    public ExportAssetsJsonlRequest withQueryParams(ExportAssetsJsonlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportAssetsJsonlSecurity security;
    public ExportAssetsJsonlRequest withSecurity(ExportAssetsJsonlSecurity security) {
        this.security = security;
        return this;
    }
}