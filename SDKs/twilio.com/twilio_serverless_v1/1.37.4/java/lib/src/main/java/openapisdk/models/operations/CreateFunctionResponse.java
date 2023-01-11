package openapisdk.models.operations;



public class CreateFunctionResponse {
    public String contentType;
    public CreateFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceFunction serverlessV1ServiceFunction;
    public CreateFunctionResponse withServerlessV1ServiceFunction(openapisdk.models.shared.ServerlessV1ServiceFunction serverlessV1ServiceFunction) {
        this.serverlessV1ServiceFunction = serverlessV1ServiceFunction;
        return this;
    }
}