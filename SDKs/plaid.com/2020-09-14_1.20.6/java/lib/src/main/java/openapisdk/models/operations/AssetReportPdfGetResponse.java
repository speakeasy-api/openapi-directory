package openapisdk.models.operations;



public class AssetReportPdfGetResponse {
    public byte[] assetReportPDFGetResponse;
    public AssetReportPdfGetResponse withAssetReportPdfGetResponse(byte[] assetReportPDFGetResponse) {
        this.assetReportPDFGetResponse = assetReportPDFGetResponse;
        return this;
    }
    public String contentType;
    public AssetReportPdfGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssetReportPdfGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}