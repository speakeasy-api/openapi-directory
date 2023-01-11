package openapisdk.models.operations;



public class FetchDeploymentResponse {
    public String contentType;
    public FetchDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment serverlessV1ServiceEnvironmentDeployment;
    public FetchDeploymentResponse withServerlessV1ServiceEnvironmentDeployment(openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment serverlessV1ServiceEnvironmentDeployment) {
        this.serverlessV1ServiceEnvironmentDeployment = serverlessV1ServiceEnvironmentDeployment;
        return this;
    }
}