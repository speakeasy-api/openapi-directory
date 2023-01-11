package openapisdk.models.operations;



public class DeploymentmanagerResourcesListResponse {
    public String contentType;
    public DeploymentmanagerResourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourcesListResponse resourcesListResponse;
    public DeploymentmanagerResourcesListResponse withResourcesListResponse(openapisdk.models.shared.ResourcesListResponse resourcesListResponse) {
        this.resourcesListResponse = resourcesListResponse;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerResourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}