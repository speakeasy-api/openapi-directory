package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMavenArtifactsResponse listMavenArtifactsResponse;
    public ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse withListMavenArtifactsResponse(openapisdk.models.shared.ListMavenArtifactsResponse listMavenArtifactsResponse) {
        this.listMavenArtifactsResponse = listMavenArtifactsResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}