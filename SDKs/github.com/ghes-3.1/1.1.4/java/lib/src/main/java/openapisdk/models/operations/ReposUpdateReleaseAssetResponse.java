package openapisdk.models.operations;



public class ReposUpdateReleaseAssetResponse {
    public String contentType;
    public ReposUpdateReleaseAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateReleaseAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReleaseAsset releaseAsset;
    public ReposUpdateReleaseAssetResponse withReleaseAsset(openapisdk.models.shared.ReleaseAsset releaseAsset) {
        this.releaseAsset = releaseAsset;
        return this;
    }
}