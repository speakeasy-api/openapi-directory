package openapisdk.models.operations;



public class SplunkAssetSyncUpdatedJsonResponse {
    public openapisdk.models.shared.AssetsWithCheckpoint assetsWithCheckpoint;
    public SplunkAssetSyncUpdatedJsonResponse withAssetsWithCheckpoint(openapisdk.models.shared.AssetsWithCheckpoint assetsWithCheckpoint) {
        this.assetsWithCheckpoint = assetsWithCheckpoint;
        return this;
    }
    public String contentType;
    public SplunkAssetSyncUpdatedJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SplunkAssetSyncUpdatedJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}