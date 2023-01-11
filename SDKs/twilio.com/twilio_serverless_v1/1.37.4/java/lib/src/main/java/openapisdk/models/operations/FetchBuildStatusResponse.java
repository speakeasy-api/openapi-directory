package openapisdk.models.operations;



public class FetchBuildStatusResponse {
    public String contentType;
    public FetchBuildStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBuildStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceBuildBuildStatus serverlessV1ServiceBuildBuildStatus;
    public FetchBuildStatusResponse withServerlessV1ServiceBuildBuildStatus(openapisdk.models.shared.ServerlessV1ServiceBuildBuildStatus serverlessV1ServiceBuildBuildStatus) {
        this.serverlessV1ServiceBuildBuildStatus = serverlessV1ServiceBuildBuildStatus;
        return this;
    }
}