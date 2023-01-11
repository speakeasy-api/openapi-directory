package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRepositoriesResponse listRepositoriesResponse;
    public ArtifactregistryProjectsLocationsRepositoriesListResponse withListRepositoriesResponse(openapisdk.models.shared.ListRepositoriesResponse listRepositoriesResponse) {
        this.listRepositoriesResponse = listRepositoriesResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}