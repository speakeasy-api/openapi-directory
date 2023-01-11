package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsArtifactsCreateResponse {
    public openapisdk.models.shared.Artifact artifact;
    public ApigeeregistryProjectsLocationsArtifactsCreateResponse withArtifact(openapisdk.models.shared.Artifact artifact) {
        this.artifact = artifact;
        return this;
    }
    public String contentType;
    public ApigeeregistryProjectsLocationsArtifactsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsArtifactsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}