package openapisdk.models.operations;



public class GetAssetsResponse {
    public openapisdk.models.shared.Asset[] assets;
    public GetAssetsResponse withAssets(openapisdk.models.shared.Asset[] assets) {
        this.assets = assets;
        return this;
    }
    public String contentType;
    public GetAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}