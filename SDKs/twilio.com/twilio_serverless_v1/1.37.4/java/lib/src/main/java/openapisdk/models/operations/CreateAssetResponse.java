package openapisdk.models.operations;



public class CreateAssetResponse {
    public String contentType;
    public CreateAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceAsset serverlessV1ServiceAsset;
    public CreateAssetResponse withServerlessV1ServiceAsset(openapisdk.models.shared.ServerlessV1ServiceAsset serverlessV1ServiceAsset) {
        this.serverlessV1ServiceAsset = serverlessV1ServiceAsset;
        return this;
    }
}