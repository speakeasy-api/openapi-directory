package openapisdk.models.operations;



public class UpdateServiceResponse {
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1Service serverlessV1Service;
    public UpdateServiceResponse withServerlessV1Service(openapisdk.models.shared.ServerlessV1Service serverlessV1Service) {
        this.serverlessV1Service = serverlessV1Service;
        return this;
    }
}