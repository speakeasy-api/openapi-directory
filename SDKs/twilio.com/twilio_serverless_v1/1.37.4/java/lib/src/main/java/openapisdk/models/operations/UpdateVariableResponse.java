package openapisdk.models.operations;



public class UpdateVariableResponse {
    public String contentType;
    public UpdateVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable serverlessV1ServiceEnvironmentVariable;
    public UpdateVariableResponse withServerlessV1ServiceEnvironmentVariable(openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable serverlessV1ServiceEnvironmentVariable) {
        this.serverlessV1ServiceEnvironmentVariable = serverlessV1ServiceEnvironmentVariable;
        return this;
    }
}