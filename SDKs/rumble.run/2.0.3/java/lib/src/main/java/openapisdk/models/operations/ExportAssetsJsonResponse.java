package openapisdk.models.operations;



public class ExportAssetsJsonResponse {
    public openapisdk.models.shared.Asset[] assets;
    public ExportAssetsJsonResponse withAssets(openapisdk.models.shared.Asset[] assets) {
        this.assets = assets;
        return this;
    }
    public String contentType;
    public ExportAssetsJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportAssetsJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}