package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsListResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeploymentsListResponse deploymentsListResponse;
    public DeploymentmanagerDeploymentsListResponse withDeploymentsListResponse(openapisdk.models.shared.DeploymentsListResponse deploymentsListResponse) {
        this.deploymentsListResponse = deploymentsListResponse;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}