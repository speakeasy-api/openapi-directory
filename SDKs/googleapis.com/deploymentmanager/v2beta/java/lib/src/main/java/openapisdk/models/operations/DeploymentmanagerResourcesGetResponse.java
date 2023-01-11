package openapisdk.models.operations;



public class DeploymentmanagerResourcesGetResponse {
    public String contentType;
    public DeploymentmanagerResourcesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Resource resource;
    public DeploymentmanagerResourcesGetResponse withResource(openapisdk.models.shared.Resource resource) {
        this.resource = resource;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerResourcesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}