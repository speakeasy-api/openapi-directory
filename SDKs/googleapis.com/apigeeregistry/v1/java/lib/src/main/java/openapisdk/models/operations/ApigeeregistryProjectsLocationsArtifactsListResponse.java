package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsArtifactsListResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsArtifactsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListArtifactsResponse listArtifactsResponse;
    public ApigeeregistryProjectsLocationsArtifactsListResponse withListArtifactsResponse(openapisdk.models.shared.ListArtifactsResponse listArtifactsResponse) {
        this.listArtifactsResponse = listArtifactsResponse;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsArtifactsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}