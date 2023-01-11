package openapisdk.models.operations;



public class FetchFunctionVersionResponse {
    public String contentType;
    public FetchFunctionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFunctionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersion serverlessV1ServiceFunctionFunctionVersion;
    public FetchFunctionVersionResponse withServerlessV1ServiceFunctionFunctionVersion(openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersion serverlessV1ServiceFunctionFunctionVersion) {
        this.serverlessV1ServiceFunctionFunctionVersion = serverlessV1ServiceFunctionFunctionVersion;
        return this;
    }
}