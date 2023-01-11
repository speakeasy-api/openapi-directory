package openapisdk.models.operations;



public class CreateEnvironmentResponse {
    public String contentType;
    public CreateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironment serverlessV1ServiceEnvironment;
    public CreateEnvironmentResponse withServerlessV1ServiceEnvironment(openapisdk.models.shared.ServerlessV1ServiceEnvironment serverlessV1ServiceEnvironment) {
        this.serverlessV1ServiceEnvironment = serverlessV1ServiceEnvironment;
        return this;
    }
}