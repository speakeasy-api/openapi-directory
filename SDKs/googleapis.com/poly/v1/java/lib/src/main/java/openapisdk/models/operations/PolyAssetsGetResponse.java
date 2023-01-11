package openapisdk.models.operations;



public class PolyAssetsGetResponse {
    public openapisdk.models.shared.Asset asset;
    public PolyAssetsGetResponse withAsset(openapisdk.models.shared.Asset asset) {
        this.asset = asset;
        return this;
    }
    public String contentType;
    public PolyAssetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PolyAssetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}