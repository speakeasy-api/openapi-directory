package openapisdk.models.operations;



public class AssetReportAuditCopyGetResponse {
    public java.util.Map<String, Object> assetReportGetResponse;
    public AssetReportAuditCopyGetResponse withAssetReportGetResponse(java.util.Map<String, Object> assetReportGetResponse) {
        this.assetReportGetResponse = assetReportGetResponse;
        return this;
    }
    public String contentType;
    public AssetReportAuditCopyGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssetReportAuditCopyGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}