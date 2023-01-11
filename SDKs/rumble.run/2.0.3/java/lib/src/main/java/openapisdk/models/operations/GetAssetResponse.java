package openapisdk.models.operations;



public class GetAssetResponse {
    public openapisdk.models.shared.Asset asset;
    public GetAssetResponse withAsset(openapisdk.models.shared.Asset asset) {
        this.asset = asset;
        return this;
    }
    public String contentType;
    public GetAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}