package openapisdk.models.operations;



public class SnowExportAssetsJsonResponse {
    public openapisdk.models.shared.AssetServiceNow[] assetServiceNows;
    public SnowExportAssetsJsonResponse withAssetServiceNows(openapisdk.models.shared.AssetServiceNow[] assetServiceNows) {
        this.assetServiceNows = assetServiceNows;
        return this;
    }
    public String contentType;
    public SnowExportAssetsJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SnowExportAssetsJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}