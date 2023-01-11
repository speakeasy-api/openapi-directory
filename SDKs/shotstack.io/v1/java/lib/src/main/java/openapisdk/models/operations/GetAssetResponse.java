package openapisdk.models.operations;



public class GetAssetResponse {
    public openapisdk.models.shared.AssetResponse assetResponse;
    public GetAssetResponse withAssetResponse(openapisdk.models.shared.AssetResponse assetResponse) {
        this.assetResponse = assetResponse;
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