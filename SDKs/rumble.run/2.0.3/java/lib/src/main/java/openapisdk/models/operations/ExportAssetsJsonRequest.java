package openapisdk.models.operations;



public class ExportAssetsJsonRequest {
    public ExportAssetsJsonQueryParams queryParams;
    public ExportAssetsJsonRequest withQueryParams(ExportAssetsJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportAssetsJsonSecurity security;
    public ExportAssetsJsonRequest withSecurity(ExportAssetsJsonSecurity security) {
        this.security = security;
        return this;
    }
}