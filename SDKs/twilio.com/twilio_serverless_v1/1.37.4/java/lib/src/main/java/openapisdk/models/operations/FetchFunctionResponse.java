package openapisdk.models.operations;



public class FetchFunctionResponse {
    public String contentType;
    public FetchFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceFunction serverlessV1ServiceFunction;
    public FetchFunctionResponse withServerlessV1ServiceFunction(openapisdk.models.shared.ServerlessV1ServiceFunction serverlessV1ServiceFunction) {
        this.serverlessV1ServiceFunction = serverlessV1ServiceFunction;
        return this;
    }
}