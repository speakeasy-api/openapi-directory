package openapisdk.models.operations;



public class ExportAssetsCsvRequest {
    public ExportAssetsCsvQueryParams queryParams;
    public ExportAssetsCsvRequest withQueryParams(ExportAssetsCsvQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportAssetsCsvSecurity security;
    public ExportAssetsCsvRequest withSecurity(ExportAssetsCsvSecurity security) {
        this.security = security;
        return this;
    }
}