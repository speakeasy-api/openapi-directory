package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Version version;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse withVersion(openapisdk.models.shared.Version version) {
        this.version = version;
        return this;
    }
}