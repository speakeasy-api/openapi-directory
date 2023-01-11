package openapisdk.models.operations;



public class DeploymentmanagerManifestsListResponse {
    public String contentType;
    public DeploymentmanagerManifestsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManifestsListResponse manifestsListResponse;
    public DeploymentmanagerManifestsListResponse withManifestsListResponse(openapisdk.models.shared.ManifestsListResponse manifestsListResponse) {
        this.manifestsListResponse = manifestsListResponse;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerManifestsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}