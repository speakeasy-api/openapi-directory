package openapisdk.models.operations;



public class FetchAssetVersionResponse {
    public String contentType;
    public FetchAssetVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAssetVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceAssetAssetVersion serverlessV1ServiceAssetAssetVersion;
    public FetchAssetVersionResponse withServerlessV1ServiceAssetAssetVersion(openapisdk.models.shared.ServerlessV1ServiceAssetAssetVersion serverlessV1ServiceAssetAssetVersion) {
        this.serverlessV1ServiceAssetAssetVersion = serverlessV1ServiceAssetAssetVersion;
        return this;
    }
}