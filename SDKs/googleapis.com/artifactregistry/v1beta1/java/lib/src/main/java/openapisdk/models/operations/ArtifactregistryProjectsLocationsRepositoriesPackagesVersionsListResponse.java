package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVersionsResponse listVersionsResponse;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse withListVersionsResponse(openapisdk.models.shared.ListVersionsResponse listVersionsResponse) {
        this.listVersionsResponse = listVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}