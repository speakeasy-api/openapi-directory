package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadYumArtifactMediaResponse uploadYumArtifactMediaResponse;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse withUploadYumArtifactMediaResponse(openapisdk.models.shared.UploadYumArtifactMediaResponse uploadYumArtifactMediaResponse) {
        this.uploadYumArtifactMediaResponse = uploadYumArtifactMediaResponse;
        return this;
    }
}