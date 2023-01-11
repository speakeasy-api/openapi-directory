package openapisdk.models.operations;



public class DeploymentmanagerManifestsGetResponse {
    public String contentType;
    public DeploymentmanagerManifestsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Manifest manifest;
    public DeploymentmanagerManifestsGetResponse withManifest(openapisdk.models.shared.Manifest manifest) {
        this.manifest = manifest;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerManifestsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}