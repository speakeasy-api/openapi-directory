package openapisdk.models.operations;



public class FetchEnvironmentResponse {
    public String contentType;
    public FetchEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironment serverlessV1ServiceEnvironment;
    public FetchEnvironmentResponse withServerlessV1ServiceEnvironment(openapisdk.models.shared.ServerlessV1ServiceEnvironment serverlessV1ServiceEnvironment) {
        this.serverlessV1ServiceEnvironment = serverlessV1ServiceEnvironment;
        return this;
    }
}