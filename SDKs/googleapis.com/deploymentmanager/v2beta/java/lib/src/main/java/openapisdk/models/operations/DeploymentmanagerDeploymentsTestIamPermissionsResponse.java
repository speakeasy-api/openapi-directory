package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsTestIamPermissionsResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestPermissionsResponse testPermissionsResponse;
    public DeploymentmanagerDeploymentsTestIamPermissionsResponse withTestPermissionsResponse(openapisdk.models.shared.TestPermissionsResponse testPermissionsResponse) {
        this.testPermissionsResponse = testPermissionsResponse;
        return this;
    }
}