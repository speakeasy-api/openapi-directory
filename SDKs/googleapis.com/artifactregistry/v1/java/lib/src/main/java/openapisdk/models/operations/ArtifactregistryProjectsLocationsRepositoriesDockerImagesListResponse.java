package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDockerImagesResponse listDockerImagesResponse;
    public ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse withListDockerImagesResponse(openapisdk.models.shared.ListDockerImagesResponse listDockerImagesResponse) {
        this.listDockerImagesResponse = listDockerImagesResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}