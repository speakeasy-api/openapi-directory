package openapisdk.models.operations;



public class SplunkAssetSyncCreatedJsonResponse {
    public openapisdk.models.shared.AssetsWithCheckpoint assetsWithCheckpoint;
    public SplunkAssetSyncCreatedJsonResponse withAssetsWithCheckpoint(openapisdk.models.shared.AssetsWithCheckpoint assetsWithCheckpoint) {
        this.assetsWithCheckpoint = assetsWithCheckpoint;
        return this;
    }
    public String contentType;
    public SplunkAssetSyncCreatedJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SplunkAssetSyncCreatedJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}