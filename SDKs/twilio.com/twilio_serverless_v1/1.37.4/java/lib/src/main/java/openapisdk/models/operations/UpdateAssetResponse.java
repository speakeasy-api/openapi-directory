package openapisdk.models.operations;



public class UpdateAssetResponse {
    public String contentType;
    public UpdateAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceAsset serverlessV1ServiceAsset;
    public UpdateAssetResponse withServerlessV1ServiceAsset(openapisdk.models.shared.ServerlessV1ServiceAsset serverlessV1ServiceAsset) {
        this.serverlessV1ServiceAsset = serverlessV1ServiceAsset;
        return this;
    }
}