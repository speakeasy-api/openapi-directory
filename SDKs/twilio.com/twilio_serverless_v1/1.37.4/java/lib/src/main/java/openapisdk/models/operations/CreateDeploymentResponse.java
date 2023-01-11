package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment serverlessV1ServiceEnvironmentDeployment;
    public CreateDeploymentResponse withServerlessV1ServiceEnvironmentDeployment(openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment serverlessV1ServiceEnvironmentDeployment) {
        this.serverlessV1ServiceEnvironmentDeployment = serverlessV1ServiceEnvironmentDeployment;
        return this;
    }
}