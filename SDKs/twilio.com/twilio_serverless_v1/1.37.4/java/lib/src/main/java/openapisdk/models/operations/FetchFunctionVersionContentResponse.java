package openapisdk.models.operations;



public class FetchFunctionVersionContentResponse {
    public String contentType;
    public FetchFunctionVersionContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFunctionVersionContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent;
    public FetchFunctionVersionContentResponse withServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent(openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent) {
        this.serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent = serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent;
        return this;
    }
}