package openapisdk.models.operations;



public class ExportAssetsNmapXmlRequest {
    public ExportAssetsNmapXmlQueryParams queryParams;
    public ExportAssetsNmapXmlRequest withQueryParams(ExportAssetsNmapXmlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportAssetsNmapXmlSecurity security;
    public ExportAssetsNmapXmlRequest withSecurity(ExportAssetsNmapXmlSecurity security) {
        this.security = security;
        return this;
    }
}