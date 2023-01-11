package openapisdk.models.operations;



public class DisplayvideoAdvertisersAssetsUploadResponse {
    public String contentType;
    public DisplayvideoAdvertisersAssetsUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAssetResponse createAssetResponse;
    public DisplayvideoAdvertisersAssetsUploadResponse withCreateAssetResponse(openapisdk.models.shared.CreateAssetResponse createAssetResponse) {
        this.createAssetResponse = createAssetResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersAssetsUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}