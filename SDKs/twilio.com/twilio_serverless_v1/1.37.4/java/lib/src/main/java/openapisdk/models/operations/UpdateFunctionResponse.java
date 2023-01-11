package openapisdk.models.operations;



public class UpdateFunctionResponse {
    public String contentType;
    public UpdateFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceFunction serverlessV1ServiceFunction;
    public UpdateFunctionResponse withServerlessV1ServiceFunction(openapisdk.models.shared.ServerlessV1ServiceFunction serverlessV1ServiceFunction) {
        this.serverlessV1ServiceFunction = serverlessV1ServiceFunction;
        return this;
    }
}