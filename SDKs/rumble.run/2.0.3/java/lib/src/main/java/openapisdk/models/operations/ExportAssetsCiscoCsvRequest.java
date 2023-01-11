package openapisdk.models.operations;



public class ExportAssetsCiscoCsvRequest {
    public ExportAssetsCiscoCsvQueryParams queryParams;
    public ExportAssetsCiscoCsvRequest withQueryParams(ExportAssetsCiscoCsvQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportAssetsCiscoCsvSecurity security;
    public ExportAssetsCiscoCsvRequest withSecurity(ExportAssetsCiscoCsvSecurity security) {
        this.security = security;
        return this;
    }
}