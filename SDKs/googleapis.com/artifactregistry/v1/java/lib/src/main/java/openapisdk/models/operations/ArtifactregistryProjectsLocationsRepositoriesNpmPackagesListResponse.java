package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNpmPackagesResponse listNpmPackagesResponse;
    public ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse withListNpmPackagesResponse(openapisdk.models.shared.ListNpmPackagesResponse listNpmPackagesResponse) {
        this.listNpmPackagesResponse = listNpmPackagesResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}