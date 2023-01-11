package openapisdk.models.operations;



public class AssetReportGetResponse {
    public java.util.Map<String, Object> assetReportGetResponse;
    public AssetReportGetResponse withAssetReportGetResponse(java.util.Map<String, Object> assetReportGetResponse) {
        this.assetReportGetResponse = assetReportGetResponse;
        return this;
    }
    public String contentType;
    public AssetReportGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssetReportGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}