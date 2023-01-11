package openapisdk.models.operations;



public class AssetReportRefreshResponse {
    public java.util.Map<String, Object> assetReportRefreshResponse;
    public AssetReportRefreshResponse withAssetReportRefreshResponse(java.util.Map<String, Object> assetReportRefreshResponse) {
        this.assetReportRefreshResponse = assetReportRefreshResponse;
        return this;
    }
    public String contentType;
    public AssetReportRefreshResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssetReportRefreshResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}