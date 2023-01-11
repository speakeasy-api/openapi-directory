package openapisdk.models.operations;



public class CreateVariableResponse {
    public String contentType;
    public CreateVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable serverlessV1ServiceEnvironmentVariable;
    public CreateVariableResponse withServerlessV1ServiceEnvironmentVariable(openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable serverlessV1ServiceEnvironmentVariable) {
        this.serverlessV1ServiceEnvironmentVariable = serverlessV1ServiceEnvironmentVariable;
        return this;
    }
}