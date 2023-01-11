package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPackagesResponse listPackagesResponse;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse withListPackagesResponse(openapisdk.models.shared.ListPackagesResponse listPackagesResponse) {
        this.listPackagesResponse = listPackagesResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}