package openapisdk.models.operations;



public class UpdateAssetCommentsResponse {
    public openapisdk.models.shared.Asset asset;
    public UpdateAssetCommentsResponse withAsset(openapisdk.models.shared.Asset asset) {
        this.asset = asset;
        return this;
    }
    public String contentType;
    public UpdateAssetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAssetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}