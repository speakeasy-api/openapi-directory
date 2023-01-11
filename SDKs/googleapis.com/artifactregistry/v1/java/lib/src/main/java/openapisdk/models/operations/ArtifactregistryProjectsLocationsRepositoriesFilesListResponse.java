package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesFilesListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFilesResponse listFilesResponse;
    public ArtifactregistryProjectsLocationsRepositoriesFilesListResponse withListFilesResponse(openapisdk.models.shared.ListFilesResponse listFilesResponse) {
        this.listFilesResponse = listFilesResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}