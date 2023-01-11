package openapisdk.models.operations;



public class UpdateAssetTagsResponse {
    public openapisdk.models.shared.Asset asset;
    public UpdateAssetTagsResponse withAsset(openapisdk.models.shared.Asset asset) {
        this.asset = asset;
        return this;
    }
    public String contentType;
    public UpdateAssetTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAssetTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}