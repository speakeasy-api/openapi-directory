package openapisdk.models.operations;



public class FetchLogResponse {
    public String contentType;
    public FetchLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentLog serverlessV1ServiceEnvironmentLog;
    public FetchLogResponse withServerlessV1ServiceEnvironmentLog(openapisdk.models.shared.ServerlessV1ServiceEnvironmentLog serverlessV1ServiceEnvironmentLog) {
        this.serverlessV1ServiceEnvironmentLog = serverlessV1ServiceEnvironmentLog;
        return this;
    }
}