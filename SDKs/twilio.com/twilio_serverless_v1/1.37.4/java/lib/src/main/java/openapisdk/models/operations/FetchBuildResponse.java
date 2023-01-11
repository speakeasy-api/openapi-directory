package openapisdk.models.operations;



public class FetchBuildResponse {
    public String contentType;
    public FetchBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceBuild serverlessV1ServiceBuild;
    public FetchBuildResponse withServerlessV1ServiceBuild(openapisdk.models.shared.ServerlessV1ServiceBuild serverlessV1ServiceBuild) {
        this.serverlessV1ServiceBuild = serverlessV1ServiceBuild;
        return this;
    }
}