package openapisdk.models.operations;



public class CreateBuildResponse {
    public String contentType;
    public CreateBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceBuild serverlessV1ServiceBuild;
    public CreateBuildResponse withServerlessV1ServiceBuild(openapisdk.models.shared.ServerlessV1ServiceBuild serverlessV1ServiceBuild) {
        this.serverlessV1ServiceBuild = serverlessV1ServiceBuild;
        return this;
    }
}