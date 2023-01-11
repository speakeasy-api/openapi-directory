package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadKfpArtifactMediaResponse uploadKfpArtifactMediaResponse;
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse withUploadKfpArtifactMediaResponse(openapisdk.models.shared.UploadKfpArtifactMediaResponse uploadKfpArtifactMediaResponse) {
        this.uploadKfpArtifactMediaResponse = uploadKfpArtifactMediaResponse;
        return this;
    }
}