package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse {
    public openapisdk.models.shared.Artifact artifact;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse withArtifact(openapisdk.models.shared.Artifact artifact) {
        this.artifact = artifact;
        return this;
    }
    public String contentType;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}