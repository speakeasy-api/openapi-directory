package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadAptArtifactMediaResponse uploadAptArtifactMediaResponse;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse withUploadAptArtifactMediaResponse(openapisdk.models.shared.UploadAptArtifactMediaResponse uploadAptArtifactMediaResponse) {
        this.uploadAptArtifactMediaResponse = uploadAptArtifactMediaResponse;
        return this;
    }
}