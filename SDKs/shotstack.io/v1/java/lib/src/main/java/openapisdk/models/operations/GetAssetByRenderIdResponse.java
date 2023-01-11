package openapisdk.models.operations;



public class GetAssetByRenderIdResponse {
    public openapisdk.models.shared.AssetRenderResponse assetRenderResponse;
    public GetAssetByRenderIdResponse withAssetRenderResponse(openapisdk.models.shared.AssetRenderResponse assetRenderResponse) {
        this.assetRenderResponse = assetRenderResponse;
        return this;
    }
    public String contentType;
    public GetAssetByRenderIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssetByRenderIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}