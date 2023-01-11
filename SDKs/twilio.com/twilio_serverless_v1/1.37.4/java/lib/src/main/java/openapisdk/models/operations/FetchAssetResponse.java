package openapisdk.models.operations;



public class FetchAssetResponse {
    public String contentType;
    public FetchAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceAsset serverlessV1ServiceAsset;
    public FetchAssetResponse withServerlessV1ServiceAsset(openapisdk.models.shared.ServerlessV1ServiceAsset serverlessV1ServiceAsset) {
        this.serverlessV1ServiceAsset = serverlessV1ServiceAsset;
        return this;
    }
}