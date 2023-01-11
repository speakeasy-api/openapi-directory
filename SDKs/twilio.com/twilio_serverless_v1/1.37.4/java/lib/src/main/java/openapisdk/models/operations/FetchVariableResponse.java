package openapisdk.models.operations;



public class FetchVariableResponse {
    public String contentType;
    public FetchVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable serverlessV1ServiceEnvironmentVariable;
    public FetchVariableResponse withServerlessV1ServiceEnvironmentVariable(openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable serverlessV1ServiceEnvironmentVariable) {
        this.serverlessV1ServiceEnvironmentVariable = serverlessV1ServiceEnvironmentVariable;
        return this;
    }
}